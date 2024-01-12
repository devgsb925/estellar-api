import StaffUserService from '../service';
import httpResponseModel from '../../../utility/httpResponseModel';

const getStaffProfileQuery = async (offset: number, limit: number) => {
  // 1. check user exists
  const response = await StaffUserService.GetStaffProfileService(offset, limit);

  const responseModel: httpResponseModel = {
    status: 'no record found.',
    data: null,
    error: '',
  };

  if (response.rowCount > 0) {
    responseModel.status = 'success';
    responseModel.data = response.rows;
  }
  return responseModel;
};

export default getStaffProfileQuery;
