import { pool } from '../../../config/db-connection';

const getUserByCodeService = (code: string) => {
  const values = [code];
  return pool.query('SELECT * FROM users WHERE "code" = $1', values);
};

export default getUserByCodeService;
