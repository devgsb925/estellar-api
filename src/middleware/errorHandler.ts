import { Response } from 'express-serve-static-core';
import Logger from '../lib/logger/logger';
import type { NextFunction, Request } from 'express';
import AppError from '../utility/AppError';
import multer from 'multer';

const errorHandler = async (error: any, req: Request, res: Response, next: NextFunction) => {
  // joi validation errors
  if (error.name === 'ValidationError') {
    Logger.info(error.details);
    return res.status(400).send({
      type: 'ValidationError',
      details: error.details,
    });
  }

  if (error instanceof multer.MulterError) {
    Logger.info(error.message);
    return res.status(500).send({
      type: 'UploadError',
      details: error.message,
    });
  }

  //business logic errors
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      errorCode: error.errorCode,
    });
  }

  if (error) {
    return res.status(500).send({
      type: 'Error',
      details: error.message,
    });
  }

  // unexpected error
  return next();
};

export default errorHandler;
