import { pool } from '../../../config/db-connection';

const addUserRoleService = (userId: string, roleId: string, active: boolean) => {
    const values = [userId, roleId, active];
    return pool.query('INSERT INTO public.users_roles(user_id, role_id, active) VALUES ($1, $2, $3)', values);
}

export default addUserRoleService;