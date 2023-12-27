import type { Request, Response } from 'express';
import Queries from '../../domain/users/queries/index';
import authenticationSchema from '../../domain/users/schema/authentication/authenticationSchema';
import { IAuthenticationRequest } from 'domain/users/queries/dto/i-authentication-request';

import { sign } from 'jsonwebtoken';

const authenticate = async (req: Request, response: Response) => {

    const model = modelMapper(req.body['username'], req.body['password']);

    // validation error
    const { error, value } = authenticationSchema.validate(model);
    if (error) throw error;

    // business error from domain    
    var res = (await Queries.AuthenticateQuery(model));

    const accessToken = sign({
        id: res.user_id
    }, process.env.JWT_ACCESS_SECRET, { expiresIn: 1440 })


    const refreshToken = sign({
        id: res.user_id
    }, process.env.JWT_REFRESH_SECRET, { expiresIn: 2160 })


    response.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 86400000
    })

    response.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 129600000
    })

    const jsonResponse = { roles: res.roles, routes: res.routes }

    // return response
    return response.status(200).json(jsonResponse).end();

}

const modelMapper = (username: string, password: string) => {

    const model: IAuthenticationRequest = {
        username: username,
        password: password
    };

    return model;
}

export default authenticate;