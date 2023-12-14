import { Router } from "express";

import authValidator from "../validation/auth.js";
import authController from "../controller/auth/authController.js";
const authRouter = Router();

authRouter.post("/register",authValidator.register,authController.register);
// userRouter.get("/read", usercontroller.read);
// userRouter.put("/:id", usercontroller.update);
 authRouter.post("/login", authController.login);
export default authRouter;
