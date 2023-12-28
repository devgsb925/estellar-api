import { pool } from '../../../config/db-connection';

const getUserByIdService = (user_id: string) => {
  const values = [user_id];
  return pool.query('SELECT * FROM users WHERE "user_id" = $1', values);
};

export default getUserByIdService;
