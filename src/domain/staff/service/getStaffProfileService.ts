import { pool } from '../../../config/db-connection';

const getStaffProfileService = (offset: number, limit: number) => {
  const values = [offset, limit];

  return pool.query(
    `SELECT user_id, code, avatar, first_name, middle_name, last_name, nick_name, gender, email, primary_contact_no, secondary_contact_no, username FROM users 
    WHERE account_type = 1 
    ORDER BY date_created 
    OFFSET $1 LIMIT $2;`,
    values,
  );
};
export default getStaffProfileService;
