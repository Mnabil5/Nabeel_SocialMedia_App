import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import postModel from "../post/post.js";
import userModel from "../user/user.js";

const commentModel=sequelize.define("comment",{
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },

});


commentModel.belongsTo(postModel)
postModel.hasMany(commentModel)

commentModel.belongsTo(userModel)
userModel.hasMany(commentModel)


export default commentModel;