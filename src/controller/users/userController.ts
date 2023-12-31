import authenticate from './authenticate';
import addUser from './addUser';
import getUsers from './getUsers';
import getUserProfile from './getUserProfile';

const UserController = {
  Authenticate: authenticate,
  AddUser: addUser,
  GetUsers: getUsers,
  GetUserProfile: getUserProfile,
};

export default UserController;
