import Joi from "joi";

const postValidator = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        userId: Joi.number().required(),
        content: Joi.string().min(6).max(100).required(),
      });
      const { error, value } = schema.validate(data);
      if (error) {
        return res.status(400).json({ messgae: "Invalid input", error });
      }
      next();
    } catch (error) {
      return res.status(500).json({ messgae: "bad data", error });
    }
  },
};

export default postValidator;