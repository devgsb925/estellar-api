import { pool } from '../../../config/db-connection';
import IOrgProfile from '../interface/i-org-profile';

const updateOrgProfileService = (model: IOrgProfile) => {
  const values = [
    new Date(),
    model.logo,
    model.name,
    model.email,
    model.contact_no,
    model.city,
    model.complete_address,
    model.district,
    model.postal,
  ];

  const query = `UPDATE organization SET "last_update_date" = $1, "logo" = $2, "name" = $3, "email" = $4, "contact_no" = $5, "city" = $6, "complete_address" = $7, "district" = $8, "postal" = $9`;

  return pool.query(query, values);
};

export default updateOrgProfileService;
