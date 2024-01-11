import OrgProfileService from '../service';
import IOrgProfile from '../interface/i-org-profile';
import httpResponseModel from '../../../utility/httpResponseModel';

const getOrgProfileQuery = async () => {
  const response: IOrgProfile = (await OrgProfileService.GetOrgProfileService()).rows[0];

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
