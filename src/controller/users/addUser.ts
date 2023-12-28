import type { Request, Response } from 'express';

import IUser from '../../domain/users/interface/user/i-user';
import UserCommands from '../../domain/users/command';
import { IAddUserResponse } from 'domain/users/command/interface/i-add-user-response';
import addUserSchema from '../../domain/users/schema/user/addUserSchema';
import IAddUserRequest from 'domain/users/command/interface/i-add-user-request';

const addUser = async (req: Request, response: Response) => {
  const _dob = new Date(req.body['dob']);

  // validation error
  const { error, value } = addUserSchema.validate(modelMapper(req.body));
  if (error) throw error;

  const model: IUser = {
    user_id: '',
    date_created: new Date(),
    last_update_date: null,
    code: '',
    avatar: value.avatar,
    first_name: value.first_name,
    middle_name: value.middle_name,
    last_name: value.last_name,
    nick_name: value.nick_name,
    dob: _dob,
    gender: value.gender,
    email: value.email,
    primary_contact_no: value.primary_contact_no,
    secondary_contact_no: value.secondary_contact_no,
    username: value.username,
    password_hash: '',
    access_status: 0,
    relation: value.relation,
    session_token: '',
    refresh_token: '',
    salt: '',
  };

  const result: IAddUserResponse = await UserCommands.AddCommand(model);

  return response.status(200).json(result).end();
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

export default addUser;
