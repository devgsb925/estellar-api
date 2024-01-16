import type { Router } from 'express';

import tryCatch from '../../../utility/tryCatch';
import accessTokenValidation from '../../../middleware/accessTokenValidation';
import staffUsersController from '../../../controller/staffUsers/staffUsersController';

export default (router: Router) => {
  router.get(`/api/${process.env.API_VERSION}/staff`, accessTokenValidation, tryCatch(staffUsersController.GetStaffUsers));
  router.get(`/api/${process.env.API_VERSION}/staff/fname`, accessTokenValidation, tryCatch(staffUsersController.GetStaffUsersByFname));
  router.get(`/api/${process.env.API_VERSION}/staff/lname`, accessTokenValidation, tryCatch(staffUsersController.GetStaffUsersByLname));
  router.post(`/api/${process.env.API_VERSION}/staff`, accessTokenValidation, tryCatch(staffUsersController.AddStaffUser));
};
