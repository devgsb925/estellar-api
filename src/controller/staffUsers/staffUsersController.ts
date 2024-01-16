import addStaffUser from './addStaffUser';
import getStaffUsers from './getStaffUsers';
import getStaffUsersByFname from './getStaffUsersByFname';
import getStaffUsersByLname from './getStaffUsersByLname';

const staffUsersController = {
  GetStaffUsers: getStaffUsers,
  GetStaffUsersByFname: getStaffUsersByFname,
  GetStaffUsersByLname: getStaffUsersByLname,
  AddStaffUser: addStaffUser,
};

export default staffUsersController;
