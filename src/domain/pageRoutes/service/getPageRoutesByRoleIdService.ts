import { pool } from '../../../config/db-connection';

const getPageRoutesByRoleIdService = (role_id: string) => {
  const values = [role_id];
  return pool.query('SELECT role, route, label, icon, order_index, visible FROM "GetPageRoutes" WHERE "role_id" = $1', values);
};

export default getPageRoutesByRoleIdService;
