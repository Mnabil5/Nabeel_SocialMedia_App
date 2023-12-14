import { Router } from "express";
import commentController from "../controller/comment/comment.js";
const commentRouter=Router();

commentRouter.post("/create", commentController.create);
commentRouter.get("/read", commentController.read);
commentRouter.put("/update/:postId", commentController.update);
commentRouter.delete("/delete/:postId", commentController.delete);
export default commentRouter;