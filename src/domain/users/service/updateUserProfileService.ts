import { pool } from '../../../config/db-connection';
import IUpdateUserProfileRequest from '../command/interface/i-update-user-profile-request';

const updateUserProfileService = (model: IUpdateUserProfileRequest, userid: string) => {
  const values = [
    new Date(),
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
    model.relation,
    userid,
  ];

  const query = `UPDATE public.users SET "last_update_date" = $1, "code" = $2, "avatar" = $3, "first_name" = $4, "middle_name" = $5, "last_name" = $6, "nick_name" = $7, "dob" = $8, "gender" = $9, "email" = $10, "primary_contact_no" = $11, "secondary_contact_no" = $12, "relation" = $13 WHERE "user_id" = $14;`;

  return pool.query(query, values);
};

export default updateUserProfileService;
