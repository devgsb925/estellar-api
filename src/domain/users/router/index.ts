import type { Router } from 'express';

import UserController from '../../../controller/users/userController';
import tryCatch from '../../../utility/tryCatch';

export default (router: Router) => {

    router.post(`/api/${process.env.API_VERSION}/authenticate`, tryCatch(UserController.Authenticate));
    router.post(`/api/${process.env.API_VERSION}/users/add`, tryCatch(UserController.AddUser));

};

