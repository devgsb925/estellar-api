import { pool } from '../../../config/db-connection';
import ISeedStaffProfile from '../../../controller/staffUsers/seed/i-seed-staff-profile';

const addStaffUserService = (model: ISeedStaffProfile) => {
  const values = [
    model.user_id,
    model.date_created,
    null,
    model.code,
    model.avatar,
    model.first_name,
    model.middle_name,
    model.last_name,
    model.nick_name,
    model.dob,
    model.gender,
    model.email,
    model.primary_contact_no,
    model.secondary_contact_no,
    model.username,
    model.password_hash,
    model.access_status,
    model.relation,
    model.session_token,
    model.refresh_token,
    model.salt,
    model.account_type,
  ];

  return pool.query(
    'INSERT INTO public.users(user_id, date_created, last_update_date, code, avatar, first_name, middle_name, last_name, nick_name, dob, gender, email, primary_contact_no, secondary_contact_no, username, password_hash, access_status, relation, session_token, refresh_token, salt, account_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
    values,
  );
};

export default addStaffUserService;
