import AppError from '../../../utility/AppError';
import { pool, } from '../../../config/db-connection';
import ErrorCodes from '../../../constants/error-codes';
import { IAuthenticationRequest } from './dto/i-authentication-request';
import IUser from '../interface/user/i-user';

const authenticateQuery = async (model: IAuthenticationRequest) => {

    const values = [model.username];
    var response: IUser = (await pool.query('SELECT * FROM users WHERE "username" = $1', values)).rows[0];

    if (!response) {
        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
    }

    return response;
}

export default authenticateQuery;