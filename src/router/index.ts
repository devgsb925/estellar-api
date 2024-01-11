import express from 'express';
import userRoutes from '../domain/users/router';
import orgProfileRoutes from '../domain/orgInfo/router';
import staffRoutes from '../domain/staff/router';

const router = express.Router();

export default (): express.Router => {
  userRoutes(router);
  orgProfileRoutes(router);
  staffRoutes(router);
  return router;
};
