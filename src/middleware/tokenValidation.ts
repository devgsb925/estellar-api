import type { NextFunction, Request, Response } from 'express';

import { VerifyErrors, verify } from 'jsonwebtoken';
import AppError from "../utility/AppError";
import ErrorCodes from '../constants/error-codes';
import UserService from '../domain/users/service'
import Queries from '../domain/users/queries'

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {

  const accessToken = req.cookies['accessToken'];
  const refreshToken = req.cookies['refreshToken'];

  // no token error
  if (!accessToken || !refreshToken) throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);


  // verify access token, on error pass to callcack
  let callback: any;
  verify(accessToken, process.env.JWT_ACCESS_SECRET, function (err: VerifyErrors, decoded: any) {

    if (err !== null) {
      callback = err;
    } else {

      // if refresh token is valid validate ownership
      Queries.ValidateUserSessionQuery(decoded.id, accessToken, refreshToken)
        .catch((err) => {

          // unauthorized session throw error
          throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
        });

    }

  });

  // access token expire use refresh token
  if (callback !== undefined) {

    // verify refresh token
    verify(refreshToken, process.env.JWT_REFRESH_SECRET, function (err: VerifyErrors, decoded: any) {

      // on refresh token error delete session
      if (err !== null) {

        UserService.DeleteUserSession(accessToken, refreshToken)
          .catch((err) => {
            throw new AppError(ErrorCodes.POST_DATA_ERROR.errorCode, ErrorCodes.POST_DATA_ERROR.description, ErrorCodes.POST_DATA_ERROR.statusCode);
          });

        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
      } else {

        // if refresh token is valid validate ownership
        Queries.ValidateUserSessionQuery(decoded.id, accessToken, refreshToken)
          .catch((err) => {
            throw new AppError(ErrorCodes.POST_DATA_ERROR.errorCode, ErrorCodes.POST_DATA_ERROR.description, ErrorCodes.POST_DATA_ERROR.statusCode);
          });

        throw new AppError(ErrorCodes.AUTHENTICATION_ERROR.errorCode, ErrorCodes.AUTHENTICATION_ERROR.description, ErrorCodes.AUTHENTICATION_ERROR.statusCode);
      }

    });
  }

  // proceed to next pipeline
  next();

}

export default tokenValidation;