import { pool } from '../../../config/db-connection';

const getUserRoleByUserIdService = (userid: string) => {
  const values = [userid];
  return pool.query('SELECT role_id, role, active FROM "GetUserRoles" WHERE "user_id" = $1', values);
};

export default getUserRoleByUserIdService;
