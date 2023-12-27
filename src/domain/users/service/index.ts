import getUserByUsernameService from './getUserByUsernameService';
import addUserService from './addUserService';
import getUserByCodeService from './getUserByCodeService';
import getUserByIdService from './getUserByIdService';
import addUserRoleService from './addUserRoleService';
import getUserRoleByUserIdService from './getUserRoleByUserIdService';

const UserService = {
    GetUserByUsername: getUserByUsernameService,
    AddUser: addUserService,
    GetUserByCode: getUserByCodeService,
    GetUserById: getUserByIdService,
    AddUserRole: addUserRoleService,
    GetUserRoleByUserId: getUserRoleByUserIdService
}

export default UserService;