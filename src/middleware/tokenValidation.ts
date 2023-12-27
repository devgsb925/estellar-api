import type { NextFunction, Request, Response } from 'express';

import { verify } from 'jsonwebtoken';
import AppError from "../utility/AppError";
import ErrorCodes from '../constants/error-codes';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {

  const accessToken = req.cookies['accessToken'];

  const payload: any = verify(accessToken, process.env.JWT_ACCESS_SECRET);
  if (!payload) {
    throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
  }

  next();

}

export default tokenValidation;