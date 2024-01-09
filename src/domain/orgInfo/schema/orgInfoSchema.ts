import Joi from 'Joi';
import IOrgProfile from '../interface/i-org-profile';

const orgInfoSchema = Joi.object<IOrgProfile>({
  organization_id: Joi.string(),
  logo: Joi.string().max(128),
  name: Joi.string().max(32),
  email: Joi.string()
    .strict()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  contact_no: Joi.string().max(16),
  complete_address: Joi.string().max(256),
  city: Joi.string().max(32),
  district: Joi.string().max(64),
  postal: Joi.string().max(6),
});

export default orgInfoSchema;
