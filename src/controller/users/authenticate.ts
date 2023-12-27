import type { Request, Response } from 'express';
import Queries from '../../domain/users/queries/index';
import authenticationSchema from '../../domain/users/schema/authentication/authenticationSchema';
import { IAuthenticationRequest } from 'domain/users/queries/dto/i-authentication-request';

const authenticate = async (req: Request, response: Response) => {

    const model = modelMapper(req.body['username'], req.body['password']);

    // validation error
    const { error, value } = authenticationSchema.validate(model);
    if (error) throw error;

    // business error from domain    
    var res = (await Queries.AuthenticateQuery(model));

    // return response
    return response.status(200).json(res).end();

}

const modelMapper = (username: string, password: string) => {

    const model: IAuthenticationRequest = {
        username: username,
        password: password
    };

    return model;
}

export default authenticate;