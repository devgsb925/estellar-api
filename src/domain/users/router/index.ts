import type { Router } from 'express';

import UserController from '../../../controller/users/userController';
import tryCatch from '../../../utility/tryCatch';
import tokenValidation from '../../../middleware/tokenValidation';

export default (router: Router) => {
  router.post(`/api/${process.env.API_VERSION}/authenticate`, tryCatch(UserController.Authenticate));
  router.get(`/api/${process.env.API_VERSION}/users`, tokenValidation, tryCatch(UserController.GetUsers));
  router.post(`/api/${process.env.API_VERSION}/users/add`, tryCatch(UserController.AddUser));
};
