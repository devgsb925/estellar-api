import type { Response } from 'express';
import Queries from '../../domain/users/queries/index';

const getUserProfile = async (req: any, response: Response) => {
  // business error from domain
  if (!req.data) {
    return response.status(401).send({ message: 'Unauthorized!' }).end();
  }
  const res = await Queries.GetUserProfileQuery(req.data.uid);

  // return response
  return response.status(200).json(res).end();
};

export default getUserProfile;
