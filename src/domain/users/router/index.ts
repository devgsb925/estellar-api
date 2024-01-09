import type { Router } from 'express';

import UserController from '../../../controller/users/userController';
import tryCatch from '../../../utility/tryCatch';
import accessTokenValidation from '../../../middleware/accessTokenValidation';
import addUserSchemaValidator from '../schema/user/addUserSchemaValidator';
import upload from '../../../config/multer-config';

export default (router: Router) => {
  router.post(`/api/${process.env.API_VERSION}/authenticate`, tryCatch(UserController.Authenticate));

  router.get(`/api/${process.env.API_VERSION}/users`, accessTokenValidation, tryCatch(UserController.GetUsers));
  router.post(`/api/${process.env.API_VERSION}/users`, addUserSchemaValidator, tryCatch(UserController.AddUser));

  router.get(`/api/${process.env.API_VERSION}/users/profile`, accessTokenValidation, tryCatch(UserController.GetUserProfile));
  router.put(`/api/${process.env.API_VERSION}/users/profile`, accessTokenValidation, upload, tryCatch(UserController.UpdateUserProfile));

  router.post(`/api/${process.env.API_VERSION}/signout`, accessTokenValidation, tryCatch(UserController.SignOut));
};
