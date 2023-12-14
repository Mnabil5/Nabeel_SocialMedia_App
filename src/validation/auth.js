import Joi from "joi";

const authValidator = {
  register: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        username: Joi.string().min(1).max(20).required(),
        email: Joi.string().email().min(5).max(20).required(),
        password: Joi.string().required(),
      });
      const { error, value } = schema.validate(body);
      if (error) {
        return res.status(400).json({ message: "invalid data in registration", error });
      }
      next();
    } catch (error) {
      res.status(500).json({ validator_error, message: "something bad happening" });
    }
  },
};
export default authValidator;