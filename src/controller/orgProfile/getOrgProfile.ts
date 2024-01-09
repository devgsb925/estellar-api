import type { Response } from 'express';
import Queries from '../../domain/orgInfo/queries';

const getOrgProfile = async (req: any, response: Response) => {
  // business error from domain
  const res = await Queries.GetOrgProfileQuery();

  // return response
  return response.status(200).json(res).end();
};

export default getOrgProfile;
