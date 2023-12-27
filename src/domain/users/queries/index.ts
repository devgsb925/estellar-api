import authenticateQuery from './authenticateQuery';
import getUsersQuery from './getUsersQuery';
import validateUserSessionQuery from './validateUserSessionQuery';

const Queries = {
    AuthenticateQuery: authenticateQuery,
    GetUsersQuery: getUsersQuery,
    ValidateUserSessionQuery: validateUserSessionQuery
}

export default Queries;