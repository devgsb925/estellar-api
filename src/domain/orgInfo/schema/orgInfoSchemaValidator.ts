import type { Request, Response, NextFunction } from 'express';
import orgInfoSchema from './orgInfoSchema';
import IOrgProfile from '../interface/i-org-profile';

const orgInfoSchemaValidator = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = orgInfoSchema.validate(modelMapper(req.body));
  if (error) throw error;

  next();
};

const modelMapper = (formData: any) => {
  const model: IOrgProfile = {
    name: formData['name'],
    logo: formData['logo'],
    organization_id: formData['organization_id'],
    complete_address: formData['complete_address'],
    city: formData['city'],
    postal: formData['postal'],
    district: formData['district'],
    email: formData['email'],
    contact_no: formData['contact_no'],
  };

  return model;
};

export default orgInfoSchemaValidator;
