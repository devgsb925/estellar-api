import { Response } from "express-serve-static-core";
import Logger from "../lib/logger/logger";
import type { NextFunction, Request } from 'express';
import AppError from "../utility/AppError";

// class ErrorHandler {
//     public async handleError(error: Error, responseStream: Response): Promise<void> {
//         if (error) {

//             Logger.info('hello world!');
//             Logger.info(error.stack);
//         }

//         // await logger.logError(error);
//         // await fireMonitoringMetric(error);
//         // await crashIfUntrustedErrorOrSendResponse(error, responseStream);
//     };
// }

// export const handler = new ErrorHandler();

const errorHandler = async (error: any, req: Request, res: Response, next: NextFunction) => {

    // joi validation errors
    if (error.name === 'ValidationError') {

        Logger.info(error.details);
        return res.status(400).send({
            type: "ValidationError",
            details: error.details
        });
    }

    //business logic errors
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            errorCode: error.errorCode,
        })
    }

    // unexpected errors
    return res.status(500).send(error.message);
}

export default errorHandler;