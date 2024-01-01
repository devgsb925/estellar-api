import authenticate from './authenticate';
import addUser from './addUser';
import getUsers from './getUsers';
import getUserProfile from './getUserProfile';
import signOut from './signOut';
import fileUpload from './fileUpload';

const UserController = {
  Authenticate: authenticate,
  AddUser: addUser,
  GetUsers: getUsers,
  GetUserProfile: getUserProfile,
  FileUpload: fileUpload,
  SignOut: signOut,
};

export default UserController;
