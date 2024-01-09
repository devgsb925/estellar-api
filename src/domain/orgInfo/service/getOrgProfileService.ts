import { pool } from '../../../config/db-connection';
import IOrgProfile from '../interface/i-org-profile';

const getOrgProfileService = () => {
  return pool.query<IOrgProfile>('SELECT * FROM organization');
};

export default getOrgProfileService;
