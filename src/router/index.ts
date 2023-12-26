import express from 'express';
import getUserRoute from '../domain/users/router/getUsersRoute'

const router = express.Router();

export default (): express.Router => {

    getUserRoute(router);
    return router;
}