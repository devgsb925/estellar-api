import type { Request, Response, NextFunction } from 'express';
import addUserSchema from '../domain/users/schema/user/addUserSchema';
import IAddUserRequest from 'domain/users/command/interface/i-add-user-request';

const addUserSchemaValidator = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = addUserSchema.validate(modelMapper(req.body));
  if (error) throw error;

  next();
};

const modelMapper = (formData: any) => {
  const model: IAddUserRequest = {
    code: formData['code'],
    avatar: formData['avatar'],
    first_name: formData['first_name'],
    middle_name: formData['middle_name'],
    last_name: formData['last_name'],
    nick_name: formData['nick_name'],
    dob: formData['dob'],
    gender: formData['gender'],
    email: formData['email'],
    primary_contact_no: formData['primary_contact_no'],
    secondary_contact_no: formData['secondary_contact_no'],
    username: formData['username'],
    relation: formData['relation'],
  };

  return model;
};

export default addUserSchemaValidator;
