import type { Router } from 'express';

import tryCatch from '../../../utility/tryCatch';
import accessTokenValidation from '../../../middleware/accessTokenValidation';
import staffUsersController from '../../../controller/staffUsers/staffUsersController';

export default (router: Router) => {
  router.get(`/api/${process.env.API_VERSION}/staff`, accessTokenValidation, tryCatch(staffUsersController.GetStaffProfile));
  router.post(`/api/${process.env.API_VERSION}/staff`, accessTokenValidation, tryCatch(staffUsersController.AddStaffUser));
};
