import type { Request, Response } from 'express';
import Queries from '../../domain/users/queries/index';

const getUserProfile = async (req: Request, response: Response) => {
  // business error from domain
  const res = await Queries.GetUserProfileQuery('6451f456-b8d1-4c31-9929-264db2411150');

  // return response
  return response.status(200).json(res).end();
};

export default getUserProfile;
