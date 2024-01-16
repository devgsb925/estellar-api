import StaffUserService from '../service';
import httpResponseModel from '../../../utility/httpResponseModel';

const getStaffUsers = async (offset: number, limit: number) => {
  // 1. check user exists
  const response = await StaffUserService.GetStaffUserService.getStaffUsers(offset, limit);

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

const getStaffUsersByFname = async (fname: string, offset: number, limit: number) => {
  const kw = fname + '%';
  const response = await StaffUserService.GetStaffUserService.getStaffUsersByFname(kw, offset, limit);

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

const getStaffUsersByLname = async (lname: string, offset: number, limit: number) => {
  const kw = lname + '%';
  const response = await StaffUserService.GetStaffUserService.getStaffUsersByLname(kw, offset, limit);

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

const GetStaffUsersQuery = {
  GetStaffUsers: getStaffUsers,
  GetStaffUsersByFname: getStaffUsersByFname,
  GetStaffUsersByLname: getStaffUsersByLname,
};

export default GetStaffUsersQuery;
