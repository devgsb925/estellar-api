import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import { IAuthenticationRequest } from './dto/i-authentication-request';
import IUser from '../interface/user/i-user';
import UserService from '../service';
import { PasswordEquality } from '../../../utility/cryptography';

const authenticateQuery = async (model: IAuthenticationRequest) => {

    var response: IUser = (await UserService.GetUserByUsername(model.username)).rows[0];

    if (!response) {
        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
    }

    var passwordValidate = PasswordEquality(model.password, response.password_hash, response.salt);
    if (!passwordValidate) {
        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
    }

    return response;
}

export default authenticateQuery;