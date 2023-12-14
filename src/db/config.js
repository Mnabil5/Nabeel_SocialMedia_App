
import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   "socialmedia", "postgres", "4272", {
//   host: "localhost",
//   port: 5432,
//   dialect: "postgres",
//   logging:false
  
// });

const envData1 = process.env;

const sequelize = new Sequelize(
  envData1.DB_NAME,
  envData1.DB_USER,
  envData1.DB_PASSWORD,
  {
    host: envData1.DB_HOST,
    port: envData1.DB_PORT,
    dialect: envData1.DB_DIALECT,
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
