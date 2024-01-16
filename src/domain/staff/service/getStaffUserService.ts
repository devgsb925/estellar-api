import { pool } from '../../../config/db-connection';

const getStaffUsers = (offset: number, limit: number) => {
  const values = [offset, limit];

  return pool.query(
    `SELECT user_id, code, avatar, first_name, middle_name, last_name, nick_name, gender, email, primary_contact_no, secondary_contact_no, username FROM users 
    WHERE account_type = 2 
    ORDER BY first_name 
    OFFSET $1 LIMIT $2;`,
    values,
  );
};

const getStaffUsersByLname = (lname: string, offset: number, limit: number) => {
  const values = [lname, offset, limit];

  return pool.query(
    `SELECT user_id, code, avatar, first_name, middle_name, last_name, nick_name, gender, email, primary_contact_no, secondary_contact_no, username FROM users 
    WHERE account_type = 2 AND last_name LIKE $1
    ORDER BY first_name 
    OFFSET $2 LIMIT $3;`,
    values,
  );
};

const getStaffUsersByFname = (fname: string, offset: number, limit: number) => {
  const values = [fname, offset, limit];

  return pool.query(
    `SELECT user_id, code, avatar, first_name, middle_name, last_name, nick_name, gender, email, primary_contact_no, secondary_contact_no, username FROM users 
    WHERE account_type = 2 AND first_name LIKE $1
    ORDER BY first_name 
    OFFSET $2 LIMIT $3;`,
    values,
  );
};

const getStaffUserService = {
  getStaffUsersByLname: getStaffUsersByLname,
  getStaffUsersByFname: getStaffUsersByFname,
  getStaffUsers: getStaffUsers,
};

export default getStaffUserService;
