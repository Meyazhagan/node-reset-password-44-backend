const Joi = require("joi");

const schema = {
  login: Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required(),
  }),
  register: Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required(),
    repeatPassword: Joi.valid(Joi.ref("password")).required(),
  }),
  forgot: Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  }),
  reset: Joi.object({
    password: Joi.string().required(),
    repeatPassword: Joi.valid(Joi.ref("password")).required(),
  }),
};

const validator = (type, details) => schema[type].validate(details);

module.exports = validator;
