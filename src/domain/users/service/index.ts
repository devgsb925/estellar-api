import getUserByUsernameService from './getUserByUsernameService';
import addUserService from './addUserService';
import getUserByCodeService from './getUserByCodeService';
import getUserByIdService from './getUserByIdService';
import addUserRoleService from './addUserRoleService';

const UserService = {
    GetUserByUsername: getUserByUsernameService,
    AddUser: addUserService,
    GetUserByCodeService: getUserByCodeService,
    GetUserByIdService: getUserByIdService,
    AddUserRoleService: addUserRoleService
}

export default UserService;