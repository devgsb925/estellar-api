import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import { IAuthenticationRequest } from './dto/i-authentication-request';
import IUser from '../interface/user/i-user';
import UserService from '../service';
import PageRouteService from '../../pageRoutes/service';

import { PasswordEquality } from '../../../utility/cryptography';


const authenticateQuery = async (model: IAuthenticationRequest) => {

    // 1. check user exists
    var response: IUser = (await UserService.GetUserByUsername(model.username)).rows[0];

    // user exists error
    if (!response) {
        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
    }

    // 2. verify password
    var passwordValidate = PasswordEquality(model.password, response.password_hash, response.salt);

    // verify password error
    if (!passwordValidate) {
        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
    }

    // 3. get user roles
    var userRoles = await UserService.GetUserRoleByUserId(response.user_id);

    // user roles error
    if (!userRoles) {
        throw new AppError(ErrorCodes.NO_ROLE_FOUND.errorCode, ErrorCodes.NO_ROLE_FOUND.description, ErrorCodes.NO_ROLE_FOUND.statusCode);
    }

    // set routes response array, removed role_id
    let routes: string[] = [];
    for (let index = 0; index < userRoles.rows.length; index++) {
        const role = userRoles.rows[index];

        var rolesByRoleIdList: string[] = (await PageRouteService.GetPageRoutesByRoleId(role.role_id)).rows;
        routes = [...routes, ...rolesByRoleIdList];
    }

    const rolesList: { role: string, active: boolean }[] = [];
    userRoles.rows.forEach(f => rolesList.push({ role: f.role, active: f.active }));

    return { roles: rolesList, routes: routes };
}

export default authenticateQuery;