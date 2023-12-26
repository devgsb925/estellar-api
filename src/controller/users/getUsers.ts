import type { Request, Response } from 'express';
import Queries from '../../domain/users/queries/index';
import roleSchema from '../../domain/users/schema/role/roleSchema';
import ErrorCodes from '../../constants/error-codes';
import AppError from '../../utility/AppError';

const getUsersSubscription = () => 0;

const getUsers = async (req: Request, response: Response) => {

    const { error, value } = roleSchema.validate({ role_id: 1, role: '1234' });
    if (error) throw error;

    //business error from domain
    const subscription = getUsersSubscription();
    if (subscription === 0) {
        throw new AppError(ErrorCodes.INVALID_CREDENTIAL_ERROR.errorCode, ErrorCodes.INVALID_CREDENTIAL_ERROR.description, ErrorCodes.INVALID_CREDENTIAL_ERROR.statusCode);
    }
    var res = (await Queries.GetUsers("0622b107-693f-4f0e-b02d-3ff699633211")).rows;
    return response.status(200).json(res).end();

}

export default getUsers;