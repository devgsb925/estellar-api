import type { Router } from 'express';

import OrgProfileController from '../../../controller/orgProfile/orgProfileController';
import tryCatch from '../../../utility/tryCatch';
import accessTokenValidation from '../../../middleware/accessTokenValidation';
import upload from '../../../config/multer-config';

export default (router: Router) => {
  router.get(`/api/${process.env.API_VERSION}/organization`, accessTokenValidation, tryCatch(OrgProfileController.GetOrgProfile));
  router.put(`/api/${process.env.API_VERSION}/organization`, accessTokenValidation, upload, tryCatch(OrgProfileController.UpdateOrgProfile));
};
