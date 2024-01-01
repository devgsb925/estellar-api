import type { Request, Response } from 'express';
import Command from '../../domain/users/command';

const signOut = async (req: Request, response: Response) => {
  // business error from domain
  if (!req.data) {
    return response.status(401).send({ message: 'Unauthorized!' });
  }
  // business error from domain
  const res = await Command.DeleteUserSessionCommand(req.data.sessionToken, req.data.refreshToken);
  console.log(res);

  // return response
  return response.status(200).json(res).end();
};

export default signOut;
