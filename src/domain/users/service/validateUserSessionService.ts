import { pool } from '../../../config/db-connection';

const validateSessionService = (userid: string, sessionToken: string, refreshToken: string) => {
    const values = [userid];
    return pool.query('SELECT * FROM users WHERE "user_id" = $1', values);
}

export default validateSessionService;