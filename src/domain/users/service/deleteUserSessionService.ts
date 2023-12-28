import { pool } from '../../../config/db-connection';

const deleteUserSessionService = (sessionToken: string, refreshToken: string) => {
  const values = [new Date(), '', '', sessionToken, refreshToken];

  return pool.query(
    'UPDATE public.users SET "last_update_date" = $1, "session_token" = $2, "refresh_token" = $3 WHERE "session_token" = $4 AND "refresh_token" = $5;',
    values,
  );
};

export default deleteUserSessionService;
