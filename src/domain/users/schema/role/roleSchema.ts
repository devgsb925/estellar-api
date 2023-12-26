import Joi from 'Joi';

const roleSchema = Joi.object({
    role_id: Joi.required(),
    role: Joi.string()
        .required()
        .max(32),
})

export default roleSchema;