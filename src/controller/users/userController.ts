import authenticate from './authenticate';
import addUser from './addUser';
import getUsers from './getUsers';

const UserController = {
  Authenticate: authenticate,
  AddUser: addUser,
  GetUsers: getUsers,
};

export default UserController;
