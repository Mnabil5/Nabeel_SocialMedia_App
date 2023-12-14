import { Router } from "express";
import authRouter from "./authRouter.js";
import postRouter from "./postRouter.js";
import commentRouter from "./commentRouter.js";
import likeRouter from "./likeRouter.js";

const allRoutes = Router();

allRoutes.use("/", authRouter);

allRoutes.use("/post",postRouter);
allRoutes.use("/comment",commentRouter);
allRoutes.use("/like",likeRouter)
export default allRoutes;
