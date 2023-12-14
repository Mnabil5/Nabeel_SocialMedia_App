import commentModel from "../../model/comment/comment.js";

const commentController = {
  create: async (req, res) => {
    const { author, content } = req.body;
    try {
      const newComment = await commentModel.create({
        author,
        content
      });

      return res.status(201).json({
        message: "New comment created",
        comment: newComment
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something went wrong",
      });
    }
  },

  read: async (req, res) => {
    const postId = req.params.postId;
    try {
      const comment = await commentModel.findAll({ where:{postId} });
      return res.status(200).json({
        message: "get require comment successfully",
        comment,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something went wrong",
      });
    }
  },

  update: async (req, res) => {
    const commentId = req.params.id;
    const { content } = req.body;
    try {
      const updatedComment = await commentModel.findByPk(commentId);
      if (!updatedComment) {
        return res.status(404).json({
          message: "Comment not found",
        });
      }
      await updatedComment.update({ content });
      return res.status(200).json({
        message: "Comment updated successfully",
        comment: updatedComment.save()
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something went wrong",
      });
    }
  },

  delete: async (req, res) => {
    const commentId = req.params.id;
    try {
      const commentDelete = await commentModel.findByPk(commentId);
      if (!commentDelete) {
        return res.status(404).json({
          message: "Comment not found",
        });
      }
      await commentDelete.destroy();

      return res.status(200).json({
        message: "Comment deleted successfully"
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something went wrong",
      });
    }
  }
};

export default commentController