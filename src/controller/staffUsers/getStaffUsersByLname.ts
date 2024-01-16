import type { Response } from 'express';
import Queries from '../../domain/staff/queries/index';

const getStaffUsersByLname = async (req: any, response: Response) => {
  if (!req.data) {
    return response.status(401).send({ message: 'Unauthorized!' }).end();
  }

  const res = await Queries.GetStaffProfileQuery.GetStaffUsersByLname(req.query.lname, req.query.offset, req.query.limit);

  // return response
  return response.status(200).json(res).end();
};

export default getStaffUsersByLname;
