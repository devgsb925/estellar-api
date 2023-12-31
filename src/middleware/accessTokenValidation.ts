import type { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import Queries from '../domain/users/queries';
import Commands from '../domain/users/command';

const { TokenExpiredError } = jwt;

const catchError = (err: any, res: Response, at: string, rt: string) => {
  if (err instanceof TokenExpiredError) {
    Commands.DeleteUserSessionCommand(at, rt);
    return res.status(401).send({ message: 'Unauthorized!' });
  }

  return res.sendStatus(401).send({ message: 'Unauthorized!' });
};

const accessTokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers['authorization'];
    const btoken = bearer.replace('Bearer ', '');
    const tokens = btoken.split(';');

    if (!bearer) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }

    jwt.verify(tokens[0], process.env.JWT_ACCESS_SECRET, async (err, decoded: any) => {
      if (err) {
        return catchError(err, res, tokens[0], tokens[1]);
      }

      const validateUser = await Queries.ValidateUserSessionQuery(decoded.id, tokens[0], tokens[1]);
      if (validateUser === 0) {
        return res.status(401).send({ message: 'Unauthorized!!' });
      }

      // req.ro = decoded.id;
      next();
    });
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }
};

export default accessTokenValidation;
