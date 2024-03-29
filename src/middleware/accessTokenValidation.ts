import type { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import Queries from '../domain/users/queries';
import Commands from '../domain/users/command';

declare module 'express-serve-static-core' {
  // eslint-disable-next-line no-unused-vars
  interface Request {
    data?: { uid: string; sessionToken: string; refreshToken: string; fileName: string };
  }
}

const { TokenExpiredError } = jwt;

const catchError = (err: any, res: Response, at: string, rt: string) => {
  if (err instanceof TokenExpiredError) {
    Commands.DeleteUserSessionCommand(at, rt);
    return res.status(401).send({ message: 'Unauthorized! 1' }).end();
  }

  return res.sendStatus(401).send({ message: 'Unauthorized! 2' }).end();
};

const accessTokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers['authorization'];
    const btoken = bearer.replace('Bearer ', '');
    const tokens = btoken.split(';');

    if (!bearer) {
      return res.status(401).send({ message: 'Unauthorized! 3' }).end();
    }

    jwt.verify(tokens[0], process.env.JWT_ACCESS_SECRET, async (err, decoded: any) => {
      if (err) {
        return catchError(err, res, tokens[0], tokens[1]);
      }

      const validateUser = await Queries.ValidateUserSessionQuery(decoded.id, tokens[0], tokens[1]);

      if (validateUser === 0) {
        return res.status(401).send({ message: 'Unauthorized! 4' }).end();
      }

      req.data = { uid: decoded.id, sessionToken: tokens[0], refreshToken: tokens[1], fileName: '' };
      next();
    });
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized!5 ' }).end();
  }
};

export default accessTokenValidation;
