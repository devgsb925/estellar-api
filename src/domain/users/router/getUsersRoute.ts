import type { Router } from 'express';

import UserController from '../../../controller/users/userController';
import tryCatch from '../../../utility/tryCatch';

export default (router: Router) => {

    router.get(`/api/${process.env.API_VERSION}/users`, tryCatch(UserController.GetUsers));

};

