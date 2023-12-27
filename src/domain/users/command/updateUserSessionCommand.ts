import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import UserService from '../service';

const updateUserSessionCommand = async (sessionToken: string, refreshToken: string, userid: string) => {

    var updateUserSession = (await UserService.UpdateUserSession(sessionToken, refreshToken, userid)).rowCount;
    if (updateUserSession < 1) {
        throw new AppError(ErrorCodes.POST_DATA_ERROR.errorCode, ErrorCodes.POST_DATA_ERROR.description, ErrorCodes.POST_DATA_ERROR.statusCode);
    }

    return updateUserSession;
}

export default updateUserSessionCommand;