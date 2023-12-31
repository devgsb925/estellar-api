import getUserByUsernameService from './getUserByUsernameService';
import addUserService from './addUserService';
import getUserByCodeService from './getUserByCodeService';
import getUserByIdService from './getUserByIdService';
import addUserRoleService from './addUserRoleService';
import getUserRoleByUserIdService from './getUserRoleByUserIdService';
import getUsersService from './getUsersService';
import updateUserSessionService from './updateUserSessionService';
import deleteUserSessionService from './deleteUserSessionService';
import validateUserSessionService from './validateUserSessionService';
import getUserProfileService from './getUserProfileService';

const UserService = {
  GetUserByUsername: getUserByUsernameService,
  AddUser: addUserService,
  GetUserByCode: getUserByCodeService,
  GetUserById: getUserByIdService,
  AddUserRole: addUserRoleService,
  GetUserRoleByUserId: getUserRoleByUserIdService,
  GetUsers: getUsersService,
  UpdateUserSession: updateUserSessionService,
  DeleteUserSession: deleteUserSessionService,
  ValidateUserSession: validateUserSessionService,
  GetUserProfile: getUserProfileService,
};

export default UserService;
