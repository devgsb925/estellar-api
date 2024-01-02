import type { Request, Response } from 'express';

import UserCommands from '../../domain/users/command';
import IUpdateUserProfileRequest from '../../domain/users/command/interface/i-update-user-profile-request';

const updateUserProfile = async (req: Request, response: Response) => {
  let avatar = req.body['avatar'];
  if (req.data.fileName) {
    avatar = req.data.fileName;
  }
  const model: IUpdateUserProfileRequest = {
    last_update_date: new Date(),
    code: req.body['code'],
    avatar: avatar,
    first_name: req.body['first_name'],
    middle_name: req.body['middle_name'],
    last_name: req.body['last_name'],
    nick_name: req.body['nick_name'],
    dob: req.body['dob'],
    gender: req.body['gender'],
    email: req.body['email'],
    primary_contact_no: req.body['primary_contact_no'],
    secondary_contact_no: req.body['secondary_contact_no'],
    relation: req.body['relation'],
  };

  const result = await UserCommands.UpdateUserProfileCommand(model, req.data.uid);

  return response.status(200).json(result).end();
};

export default updateUserProfile;
