import { pool } from '../../../config/db-connection';

const validateSessionService = (userid: string, sessionToken: string, refreshToken: string) => {
  const values = [userid, sessionToken, refreshToken];

  return pool.query('SELECT * FROM users WHERE "user_id" = $1 AND "session_token" = $2 AND "refresh_token" = $3', values);
};

export default validateSessionService;
