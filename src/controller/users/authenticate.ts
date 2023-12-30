import type { Request, Response } from 'express';
import Queries from '../../domain/users/queries/index';
import authenticationSchema from '../../domain/users/schema/authentication/authenticationSchema';
import { IAuthenticationRequest } from '../../domain/users/queries/dto/i-authentication-request';

import { sign } from 'jsonwebtoken';
import UserCommands from '../../domain/users/command';

const authenticate = async (req: Request, response: Response) => {
  const model = modelMapper(req.body['username'], req.body['password']);

  // validation error
  // eslint-disable-next-line no-unused-vars
  const { error, value } = authenticationSchema.validate(model);
  if (error) throw error;

  // business error from domain
  const res = await Queries.AuthenticateQuery(model);
  const accessToken = sign(
    {
      id: res.user_id,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: 86400 },
  ); // 1 day 86400

  const refreshToken = sign({ id: res.user_id }, process.env.JWT_REFRESH_SECRET, { expiresIn: 129600 }); // 1.5 days 129600

  response.cookie('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 86400000, // 1 day 129600
  });

  response.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 129600000, // 1.5 days 129600
  });

  // update user session
  await UserCommands.UpdateUserSessionCommand(accessToken, refreshToken, res.user_id);

  const jsonResponse = { token: accessToken + ';' + refreshToken, roles: res.roles, routes: res.routes };

  // return response
  return response.status(200).json(jsonResponse).end();
};

const modelMapper = (username: string, password: string) => {
  const model: IAuthenticationRequest = {
    username: username,
    password: password,
  };

  return model;
};

export default authenticate;
