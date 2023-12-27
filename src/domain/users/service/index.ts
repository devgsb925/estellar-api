import getUserByUsernameService from './getUserByUsernameService';
import addUserService from './addUserService';
import getUserByCodeService from './getUserByCodeService';
import getUserByIdService from './getUserByIdService';
import addUserRoleService from './addUserRoleService';
import getUserRoleByUserIdService from './getUserRoleByUserIdService';
import getUsersService from './getUsersService';

const UserService = {
    GetUserByUsername: getUserByUsernameService,
    AddUser: addUserService,
    GetUserByCode: getUserByCodeService,
    GetUserById: getUserByIdService,
    AddUserRole: addUserRoleService,
    GetUserRoleByUserId: getUserRoleByUserIdService,
    GetUsers: getUsersService
}

export default UserService;