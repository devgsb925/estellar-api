import addStaffUser from './addStaffUser';
import getStaffUsers from './getStaffUsers';
import getStaffUsersByFname from './getStaffUsersByFname';

const staffUsersController = {
  GetStaffUsers: getStaffUsers,
  GetStaffUsersByFname: getStaffUsersByFname,
  AddStaffUser: addStaffUser,
};

export default staffUsersController;
