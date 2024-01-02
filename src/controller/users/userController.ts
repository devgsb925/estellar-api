import authenticate from './authenticate';
import addUser from './addUser';
import getUsers from './getUsers';
import getUserProfile from './getUserProfile';
import signOut from './signOut';
import updateUserProfile from './updateUserProfile';

const UserController = {
  Authenticate: authenticate,
  AddUser: addUser,
  GetUsers: getUsers,
  GetUserProfile: getUserProfile,
  UpdateUserProfile: updateUserProfile,
  SignOut: signOut,
};

export default UserController;
