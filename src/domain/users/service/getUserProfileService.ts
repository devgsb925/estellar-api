import { pool } from '../../../config/db-connection';
import IUserProfile from '../../../domain/users/interface/user/i-user-profile';

const getUserProfileService = (userid: string) => {
  const values = [userid];
  return pool.query<IUserProfile>('SELECT * FROM "GetUserProfile" WHERE "user_id" = $1', values);
};

export default getUserProfileService;
