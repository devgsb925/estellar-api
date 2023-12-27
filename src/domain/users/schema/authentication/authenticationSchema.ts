import Joi from 'Joi';

const authenticationSchema = Joi.object({
    username: Joi.string()
        .required()
        .min(8)
        .max(32),
    password: Joi.string()
        .required()
        .min(8)
        .max(32),
})

export default authenticationSchema;