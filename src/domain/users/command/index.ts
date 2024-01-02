import addCommand from './addCommand';
import updateUserSessionCommand from './updateUserSessionCommand';
import deleteUserSessionCommand from './deleteUserSessionCommand';
import updateUserProfileCommand from './updateUserProfileCommand';

const UserCommands = {
  AddCommand: addCommand,
  UpdateUserSessionCommand: updateUserSessionCommand,
  DeleteUserSessionCommand: deleteUserSessionCommand,
  UpdateUserProfileCommand: updateUserProfileCommand,
};

export default UserCommands;
