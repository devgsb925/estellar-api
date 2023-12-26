class AppError extends Error {

    readonly errorCode: number;
    readonly statusCode: number;

    constructor(errorCode: number, message: string, statusCode: number) {
        super(message);
        this.errorCode = errorCode;
        this.statusCode = statusCode;

    }
}

export default AppError;