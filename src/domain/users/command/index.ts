import addCommand from './addCommand';
import updateUserSessionCommand from './updateUserSessionCommand';
import deleteUserSessionCommand from './deleteUserSessionCommand';

const UserCommands = {
  AddCommand: addCommand,
  UpdateUserSessionCommand: updateUserSessionCommand,
  DeleteUserSessionCommand: deleteUserSessionCommand,
};

export default UserCommands;
