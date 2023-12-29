import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';

import UserService from '../service';

const validateUserSessionQuery = async (userid: string, sessionToken: string, refreshToken: string) => {
  const response: number = (await UserService.ValidateUserSession(userid, sessionToken, refreshToken)).rowCount;

  if (response === 0) {
    throw new AppError(
      ErrorCodes.AUTHENTICATION_ERROR.errorCode,
      ErrorCodes.AUTHENTICATION_ERROR.description,
      ErrorCodes.AUTHENTICATION_ERROR.statusCode,
    );
  }

  return response;
};

export default validateUserSessionQuery;
