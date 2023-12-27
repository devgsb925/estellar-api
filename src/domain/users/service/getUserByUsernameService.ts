import { pool } from '../../../config/db-connection';

const getUserByUsernameService = (username: string) => {
    const values = [username];
    return pool.query('SELECT * FROM users WHERE "username" = $1', values);
}

export default getUserByUsernameService;

