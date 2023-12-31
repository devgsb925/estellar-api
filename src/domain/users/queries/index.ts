import authenticateQuery from './authenticateQuery';
import getUsersQuery from './getUsersQuery';
import getUserProfileQuery from './getUserProfileQuery';
import validateUserSessionQuery from './validateUserSessionQuery';

const Queries = {
  AuthenticateQuery: authenticateQuery,
  GetUsersQuery: getUsersQuery,
  ValidateUserSessionQuery: validateUserSessionQuery,
  GetUserProfileQuery: getUserProfileQuery,
};

export default Queries;
