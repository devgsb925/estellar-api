import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import UserService from '../service';

const deleteUserSessionCommand = (sessionToken: string, refreshToken: string) => {
  UserService.DeleteUserSession(sessionToken, refreshToken).catch(() => {
    throw new AppError(ErrorCodes.POST_DATA_ERROR.errorCode, ErrorCodes.POST_DATA_ERROR.description, ErrorCodes.POST_DATA_ERROR.statusCode);
  });

  return 1;
};

export default deleteUserSessionCommand;
