import Joi from 'Joi';
import IAddUserRequest from '../../command/interface/i-add-user-request';

const addUserSchema = Joi.object<IAddUserRequest>({
  code: Joi.string(),
  avatar: Joi.string().max(256),
  first_name: Joi.string().max(128),
  middle_name: Joi.string().max(128),
  last_name: Joi.string().max(128),
  nick_name: Joi.string().max(32),
  dob: Joi.date(),
  gender: Joi.string().max(32),
  email: Joi.string()
    .strict()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  primary_contact_no: Joi.string().max(32),
  secondary_contact_no: Joi.string().max(32),
  username: Joi.string().strict().trim().lowercase().min(8).max(32),
  relation: Joi.string().max(32),
});

export default addUserSchema;
