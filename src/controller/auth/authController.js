import { compare,hash } from "bcrypt";
// import "dotenv/config";
import jwt from "jsonwebtoken";
import userModel from "../../model/user/user.js";
const authController = {
    register: async (req, res) => {
      try {
        const {username, email, password } = req.body;
  
        const user = await userModel.findOne({
          where: {
            email,
          },
        });
  
        if (user) {
          return res.status(400).json({
            message: `user with this ${email} already exist`,
          });
        }
  
        const hashPassword = await hash(password, 10);
        console.log("THis is hPassword =====>", hashPassword);
        await userModel.create({
          username,
          email,
          password: hashPassword,
        });
  
        return res.status(201).json({
          message: "User registered",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          error,
          message: "Something bad happened in auth",
        });
      }
    },
    login: async (req, res) => {
        try {
          const { email, password } = req.body;
    
          const user = await userModel.findOne({
            where: {
              email,
            },
          });
    
          if (!user) {
            return res.status(401).json({
              message: `Invalid credentials`,
            });
          }
          const comparePassword = await compare(password, user.password);
          if (!comparePassword) {
            return res.status(401).json({
              message: `Invalid credentials`,
            });
          }
    
          const data = {
            id: user.id,
            email: user.email,
            // test: "test",
          };
    
           const token = jwt.sign(data, process.env.SECRET_KEY, {
             expiresIn: "14d",
           });
    
          return res.status(200).json({
            message: "User login",
             token,
            data,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            error,
            message: "Something bad happened",
          });
        }
      },


}
export default authController;