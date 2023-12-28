import { pool } from '../../../config/db-connection';

const getUsersService = () => {
  return pool.query('SELECT * FROM users');
};

export default getUsersService;
