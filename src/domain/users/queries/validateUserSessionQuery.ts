import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import IUser from '../interface/user/i-user';
import UserService from '../service';

const validateUserSessionQuery = async (userid: string, sessionToken: string, refreshToken: string) => {
  const response: IUser = (await UserService.ValidateUserSession(userid, sessionToken, refreshToken)).rows[0];

  if (!response) {
    throw new AppError(
      ErrorCodes.AUTHENTICATION_ERROR.errorCode,
      ErrorCodes.AUTHENTICATION_ERROR.description,
      ErrorCodes.AUTHENTICATION_ERROR.statusCode,
    );
  }

  return 1;
};

export default validateUserSessionQuery;