
const ErrorCodes = {
    PASSWORD_NOT_MATCH: { errorCode: 400, description: 'Password not match.', statusCode: 401 },
    ALREADY_IN_USE: { errorCode: 406, description: 'Not acceptable. Already in use.', statusCode: 406 },
    INVALID_API_ENDPOINT: { errorCode: 406, description: 'Invalid api endpoint.', statusCode: 406 },
    OUT_OF_SCOPE_ERROR: { errorCode: 500, description: 'Out of scope error.', statusCode: 500 },
    INVALID_CREDENTIAL_ERROR: { errorCode: 200, description: 'Invalid credential format', statusCode: 200 },
    UNAUTHORIZED_ACCESS: { errorCode: 403, description: 'Unauthorized access. Access denied!', statusCode: 401 },
    GATEWAY_TIMEOUT: { errorCode: 504, description: 'Gateway Timeout', statusCode: 504 },

    INVALID_REFERAL_URL: { errorCode: 403, description: 'Invalid referal link', statusCode: 403 },
}

export default ErrorCodes;