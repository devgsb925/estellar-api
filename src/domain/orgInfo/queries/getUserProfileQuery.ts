import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import OrgProfileService from '../service';
import IOrgProfile from '../interface/i-org-profile';

const getOrgProfileQuery = async () => {
  // 1. check user exists
  const response: IOrgProfile = (await OrgProfileService.GetOrgProfileService()).rows[0];

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

export default getOrgProfileQuery;
