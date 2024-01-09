import OrgInfoCommands from '../../domain/orgInfo/command';
import IOrgProfile from '../../domain/orgInfo/interface/i-org-profile';
import type { Request, Response } from 'express';

const updateOrgProfile = async (req: Request, response: Response) => {
  let logo = req.body['logo'];
  if (req.data.fileName) {
    logo = req.data.fileName;
  }
  const model: IOrgProfile = {
    organization_id: req.body['organization_id'],
    logo: logo,
    name: req.body['name'],
    email: req.body['email'],
    contact_no: req.body['contact_no'],
    complete_address: req.body['complete_address'],
    district: req.body['district'],
    city: req.body['city'],
    postal: req.body['postal'],
  };

  const result = await OrgInfoCommands.UpdateOrgProfileCommand(model);

  return response.status(200).json(result).end();
};

export default updateOrgProfile;
