
import postModel from "../../model/post/post.js";

const postController = {
  create: async (req, res) => {
    const { author, content, userId } = req.body;
    try {
      const newPost = await postModel.create({
        author,
        content,
        userId,
      });
      if(newPost){
        return res.status(201).json({
          message: "New post created",
          post: newPost
        });
      }
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something bad happened",
      });
    }
  },
read : async(req,res)=>{
  const postId = req.params.postId;
  try {
    const post=await postModel.findAll({  where:{postId}});
    return res.status(200).json({
      message:"get require post successfully",
      post,
    })
  } catch (error) {
    console.log(error);
     return res.status(500).json({
      error,
      message:"something bad happening",
     })
}
},
update: async (req, res) => {
  const postId = req.params.id;
  const { content } = req.body;
  try {
    const postUpdate = await postModel.findByPk(postId);
    if (!postUpdate) {
      return res.status(404).json({
        message: "post not found",
      });
    }
    await postUpdate.update({ content });

    return res.status(200).json({
      message: "Post updated successfully",
      post: postUpdate.save(),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: "Something bad happened",
    });
  }
},

delete: async (req, res) => {
  const postId = req.params.id;
  try {
    const postDelete = await postModel.findByPk(postId);
    if (!postDelete) {
      return res.status(404).json({
        message: "post not found",
      });
    }
    await postDelete.destroy();

    return res.status(200).json({
      message: "Post deleted successfully",
      post: postDelete,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: "Something bad happened",
    });
  }

}
};
export default postController;
