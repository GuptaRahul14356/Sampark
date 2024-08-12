const joi = require("joi");

const userRegistervalidate = (req, res, next) => {
  const schema = joi.object({
    fullName: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).alphanum().required(),
    confirmpassword: joi.string().min(4).alphanum().required(),
  });
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: " Bad Request",
      error: error,
    });
  }
  next();
};

const userLoginvalidate = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).alphanum().required(),
  });
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: " Bad Request",
      error: error,
    });
  }
  next();
};

module.exports = {
  userRegistervalidate,
  userLoginvalidate,
};
