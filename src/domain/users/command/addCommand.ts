import IUser from '../interface/user/i-user';
import AppError from '../../../utility/AppError';
import ErrorCodes from '../../../constants/error-codes';
import UserService from '../service';
import { IAddUserResponse } from '../command/interface/i-add-user-response'

import {
    GenerateSalt, RandomStringGenerator,
    PasswordHasher, GenerateUUID
} from '../../../utility/cryptography';

const addCommand = async (model: IUser) => {

    var userNameExists = (await UserService.GetUserByUsername(model.username)).rowCount;
    if (userNameExists > 0) {
        throw new AppError(ErrorCodes.POST_DATA_ERROR.errorCode, ErrorCodes.POST_DATA_ERROR.description, ErrorCodes.POST_DATA_ERROR.statusCode);
    }

    // generate credentials
    const salt = GenerateSalt();
    const pw = RandomStringGenerator(4, 4);
    const code = RandomStringGenerator(4, 3);
    const passwordHash = PasswordHasher(salt, pw);

    let uid = GenerateUUID();

    // if id exists regenerate UUID
    var uidExists = await (await UserService.GetUserById(uid)).rowCount;
    if (uidExists > 0) {
        uid = GenerateUUID();
    }

    model.user_id = uid;
    model.salt = salt;
    model.password_hash = passwordHash;
    model.code = code;

    var response = await UserService.AddUser(model);
    if (!response) {
        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
    }

    // add user role
    var userRoleResponse = await UserService.AddUserRole(uid, process.env.ADMINISTRATION_UUID, true);
    if (!userRoleResponse) {
        throw new AppError(ErrorCodes.FAILED_POST_DATA_ERROR.errorCode, ErrorCodes.FAILED_POST_DATA_ERROR.description, ErrorCodes.FAILED_POST_DATA_ERROR.statusCode);
    }

    const responseData: IAddUserResponse = {
        username: model.username,
        password: pw
    };

    return responseData;
}

export default addCommand;