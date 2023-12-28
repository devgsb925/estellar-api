import express from 'express';
import userRoutes from '../domain/users/router';

const router = express.Router();

export default (): express.Router => {
  userRoutes(router);
  return router;
};
