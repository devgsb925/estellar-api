
const ErrorCodes = {
    POST_DATA_ERROR: { errorCode: 422, description: 'Unprocessable Content.', statusCode: 422 },
    FAILED_POST_DATA_ERROR: { errorCode: 500, description: 'Internal Server Error.', statusCode: 500 },
    AUTHENTICATION_ERROR: { errorCode: 401, description: 'Unauthorized.', statusCode: 401 },
    ROUTE_UNAUTHORIZED_ERROR: { errorCode: 401, description: 'Unauthorized access prohibit.', statusCode: 401 },
}

export default ErrorCodes;