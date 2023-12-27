import { pool } from '../../../config/db-connection';

const updateUserSessionService = (sessionToken: string, refreshToken: string, userId: string) => {
    const values = [
        new Date(),
        sessionToken,
        refreshToken,
        userId];

    return pool.query('UPDATE public.users SET "last_update_date" = $1, "session_token" = $2, "refresh_token" = $3 WHERE "user_id" = $4;', values);

}

export default updateUserSessionService;