import { Router } from "express";
import postValidator from "../validation/post.js";
import postController from "../controller/post/post.js";
const postRouter = Router();

postRouter.post("/create", postValidator.create,postController.create);
postRouter.get("/read", postController.read);
postRouter.put("/update/:postId", postController.update);
//postRouter.delete("/delete", postController.delete);
postRouter.delete("/delete/:postId", postController.delete);

export default postRouter;
