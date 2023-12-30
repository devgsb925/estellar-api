import UserService from '../service';

const validateUserSessionQuery = async (userid: string, sessionToken: string, refreshToken: string) => {
  return (await UserService.ValidateUserSession(userid, sessionToken, refreshToken)).rowCount;
};

export default validateUserSessionQuery;
