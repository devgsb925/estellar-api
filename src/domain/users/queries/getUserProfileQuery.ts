import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import IUserProfile from '../interface/user/i-user-profile';
import UserService from '../service';

const getUserProfileQuery = async (userid: string) => {
  // 1. check user exists
  const response: IUserProfile[] = (await UserService.GetUserProfile(userid)).rows;

  // user exists error
  if (!response) {
    throw new AppError(
      ErrorCodes.AUTHENTICATION_ERROR.errorCode,
      ErrorCodes.AUTHENTICATION_ERROR.description,
      ErrorCodes.AUTHENTICATION_ERROR.statusCode,
    );
  }

  return response;
};

export default getUserProfileQuery;
