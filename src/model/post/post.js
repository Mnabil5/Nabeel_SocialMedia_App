import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/user.js";

const postModel = sequelize.define("post", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
content:{
    type:DataTypes.STRING,
    allowNull:false
},
likeCount:{
  type:DataTypes.INTEGER,
  allowNull:false
},
});

postModel.belongsTo(userModel);
userModel.hasMany(postModel);

export default postModel;