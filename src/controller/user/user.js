// import { compare, hash } from "bcrypt";
// import  jwt  from "jsonwebtoken";
import userModel from "../../model/user/user.js";


const usercontroller = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await userModel.findOne({
        where: {
          email,
        },
      });
      if (user) {
        return res.status(400).json({
          message: "user with this email is already exist",
        });
      }

      // const hPassword = await hash(password, 10);
      
      await userModel.create({
        username,
        email,
        password
      });
      return res.status(201).json({
        message: "user registerd",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "something bad happening",
      });
    }
  },
  // read: async (req, res) => {
  //   try {
  //     const user = await userModel.findAll();
  //     if (user) {
  //       return res.status(200).json({
  //         message: "user are shown successfuly",
  //         user,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return res.staus(500).json({
  //       error,
  //       message: "something bad happening",
  //     });
  //   }
  // },
// update:async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const {username,email,password}=req.body;
//         const user = await userModel.findOne({
//             where:{
//                 id
//             }
//         });

//         if (user) {
//             user.username=username;
//             user.email=email;
//             user.password=password;
//             await user.save();
//             return res.status(200).json({
//                 message: "user are shown successfuly",
//                 user,
//             });
//         }
//     } catch (error) {
//         console.log(error)
//     }
// },
login:async(req,res)=>{

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
    // const comparePassword = await compare(password, user.password);
    // if (!comparePassword) {
    //   return res.status(401).json({
    //     message: `Invalid credentials`,
    //   });
    // }

    const data = {
      id: user.id,
      email: user.email,
      // test: "test",
    };

    // const token = jwt.sign(data,
    //   //  process.env.
    //    JWT_SECRET, {
    //   expiresIn: "10d",
    // });

    // LoginEmail({
    //   from: "Ali@mr10.com",
    //   to: user.email,
    //   subject: "Login Notification",
    //   text: "We detected a new login if that wasn't ypu please contact support or reset password",
    // });

    // req.session.token = token;
    // req.session.user = data;
    // req.session.save();

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
},}
// try {
//   const {email,password}= req.body
//   const user = await userModel.findOne({
//     where: {
//       email,
//       password,
//     },
//   });
//   if (user) {
//     return res.status(200).json({
//       message: "user succesfully login",
//       user,
//     });
//   }

// } catch (error) {
//   console.log(error);
//   return res.staus(500).json({
//     error,
//     message: "something bad happening",
//   });
// }
// };

export default usercontroller;
