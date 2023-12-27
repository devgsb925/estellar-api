import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import IUser from '../interface/user/i-user';
import UserService from '../service';

const getUsersQuery = async () => {

    // 1. check user exists
    var response: IUser[] = (await UserService.GetUsers()).rows;

    // user exists error
    if (!response) {
        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
    }

    return response;
}

export default getUsersQuery;