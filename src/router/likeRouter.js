import { Router } from "express";
import likeController from "../controller/like/like.js";
const likeRouter=Router();

likeRouter.post("/create", likeController.create);
likeRouter.put("/update/:postId", likeController.update);
likeRouter.delete("/delete/:postId", likeController.delete);

export default likeRouter;