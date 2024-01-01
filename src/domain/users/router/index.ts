import type { Router } from 'express';

import UserController from '../../../controller/users/userController';
import tryCatch from '../../../utility/tryCatch';
import accessTokenValidation from '../../../middleware/accessTokenValidation';
import addUserSchemaValidator from '../../../schemaValidators/addUserSchemaValidator';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  },
});
const upload = multer({ storage: storage }).single('file');

export default (router: Router) => {
  router.post(`/api/${process.env.API_VERSION}/authenticate`, tryCatch(UserController.Authenticate));
  router.get(`/api/${process.env.API_VERSION}/users`, accessTokenValidation, tryCatch(UserController.GetUsers));
  router.get(`/api/${process.env.API_VERSION}/users/profile`, accessTokenValidation, tryCatch(UserController.GetUserProfile));
  router.post(`/api/${process.env.API_VERSION}/users/add`, addUserSchemaValidator, tryCatch(UserController.AddUser));
  router.post(`/api/${process.env.API_VERSION}/signout`, accessTokenValidation, tryCatch(UserController.SignOut));
  router.post(`/api/${process.env.API_VERSION}/users/upload`, upload, tryCatch(UserController.FileUpload));
};
