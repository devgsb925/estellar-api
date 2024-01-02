import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import IUserProfileResponse from './interface/i-user-profile-response';
import UserService from '../service';

const getUserProfileQuery = async (userid: string) => {
  // 1. check user exists
  const response: IUserProfileResponse = (await UserService.GetUserProfile(userid)).rows[0];

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
