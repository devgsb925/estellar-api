import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import { IAuthenticationRequest } from './dto/i-authentication-request';
import IUser from '../interface/user/i-user';
import UserService from '../service';
import PageRouteService from '../../pageRoutes/service';

import { PasswordEquality } from '../../../utility/cryptography';

const authenticateQuery = async (model: IAuthenticationRequest) => {
  // 1. check user exists
  const response: IUser = (await UserService.GetUserByUsername(model.username)).rows[0];

  // user exists error
  if (!response) {
    throw new AppError(
      ErrorCodes.AUTHENTICATION_ERROR.errorCode,
      ErrorCodes.AUTHENTICATION_ERROR.description,
      ErrorCodes.AUTHENTICATION_ERROR.statusCode,
    );
  }

  // 2. verify password
  const passwordValidate = PasswordEquality(model.password, response.password_hash, response.salt);

  // verify password error
  if (!passwordValidate) {
    throw new AppError(
      ErrorCodes.AUTHENTICATION_ERROR.errorCode,
      ErrorCodes.AUTHENTICATION_ERROR.description,
      ErrorCodes.AUTHENTICATION_ERROR.statusCode,
    );
  }

  // 3. get user roles
  const userRoles = await UserService.GetUserRoleByUserId(response.user_id);

  // user roles error
  if (!userRoles) {
    throw new AppError(ErrorCodes.NO_ROLE_FOUND.errorCode, ErrorCodes.NO_ROLE_FOUND.description, ErrorCodes.NO_ROLE_FOUND.statusCode);
  }

  // set routes response array, removed role_id
  let routes: { role: string; route: string; label: string; icon: string; order_index: number; visible: boolean }[] = [];
  for (let index = 0; index < userRoles.rows.length; index++) {
    const role = userRoles.rows[index];

    const rolesByRoleIdList: { role: string; route: string; label: string; icon: string; order_index: number; visible: boolean }[] = (
      await PageRouteService.GetPageRoutesByRoleId(role.role_id)
    ).rows;
    routes = [...routes, ...rolesByRoleIdList];
  }

  const rolesList: { role: string; active: boolean }[] = [];
  userRoles.rows.forEach((f) => rolesList.push({ role: f.role, active: f.active }));

  return { user_id: response.user_id, roles: rolesList, routes: routes };
};

export default authenticateQuery;
