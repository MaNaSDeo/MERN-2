const Joi = require("joi");

const schema = Joi.object()
  .keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid("male", "female").insensitive(),
  })
  .or("age", "gender");

const validateSearchQuery = (req, res, next) => {
  const { gender, age } = req.query;
  const result = schema.validate({ gender, age });
  if (result.error) {
    return res.status(422).json(result.error);
  }
  next();
};

module.exports = { validateSearchQuery };
