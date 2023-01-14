// const joi = require("@hapi/joi");
const Joi = require("joi");

const authSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).empty("").required(),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .lowercase()
    .required(),
  password: Joi.string()
    .min(7)
    .max(10)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repeat_password: Joi.ref("password"),
  gender: Joi.string().required(),
  type: Joi.string().lowercase().required(),
  birth_year: Joi.number().integer().min(1900).max(2013),
});

module.exports = authSchema;
