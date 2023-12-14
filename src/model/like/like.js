import sequelize from "../../db/config.js";
import postModel from "../post/post.js";
import userModel from "../user/user.js";

const likeModel=sequelize.define("like",{

});

likeModel.belongsTo(postModel)
postModel.hasMany(likeModel)
 
likeModel.belongsTo(userModel)
userModel.hasMany(likeModel)

export default likeModel;