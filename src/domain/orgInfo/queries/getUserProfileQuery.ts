import OrgProfileService from '../service';
import IOrgProfile from '../interface/i-org-profile';
import httpResponseModel from '../../../utility/httpResponseModel';

const getOrgProfileQuery = async () => {
  // 1. check user exists
  const response: IOrgProfile = (await OrgProfileService.GetOrgProfileService()).rows[0];

  // user exists error
  // if (!response) {
  //   throw new AppError(
  //     ErrorCodes.AUTHENTICATION_ERROR.errorCode,
  //     ErrorCodes.AUTHENTICATION_ERROR.description,
  //     ErrorCodes.AUTHENTICATION_ERROR.statusCode,
  //   );
  // }

  const responseModel: httpResponseModel = {
    status: 'no record found.',
    data: null,
    error: '',
  };

  if (response) {
    responseModel.status = 'success';
    responseModel.data = response;
  }

  return responseModel;
};

export default getOrgProfileQuery;
