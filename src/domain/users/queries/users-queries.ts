import { pool, } from '../../../config/db-connection';
import ErrorCodes from '../../../constants/error-codes';

const getUsers = async (uid: string) => {
    try {

        const values = [uid];
        // return await pool.query('SELECT * FROM users WHERE "user_id" = $1', values);
        return await pool.query('SELECT * FROM roles');

    } catch (e) {

        if (e.toString().indexOf('AggregateError') !== -1) {
            throw new Error("error");
        }

    }
}

export default getUsers;