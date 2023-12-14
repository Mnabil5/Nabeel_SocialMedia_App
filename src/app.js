import "dotenv/config";
import  express  from "express";
import allRoutes from "./router/router.js";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize"
import sequelize, { connectDB } from "./db/config.js";
import dbInit from "./db/init.js";
//  import authenticateMiddelware from "./middleware/authenticate.js";
// const PORT =3300;
const PORT = process.env.PORT;

const app = express();

const mySequelizeStore = SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});

app.use(
  Session({
    secret: "lanskjagsfjhgsdjhgf",
    Store: mySequelizeStore1,
    saveUninitialized: false,
    resave: true, // we support the touch method so per the express-session docs this should be set to false
    proxy: false, // if you do SSL outside of node.
  })
);

app.use(express.json());
app.use("/", allRoutes);
connectDB();
mySequelizeStore1.sync();
dbInit()
  .then(() =>
   console.log("DB synced"))
   .catch((err) => 
   console.log("Db not synced", err));
   


app.listen(PORT, (error) => {
    if (!error) {
      console.log(`Server started at http://localhost:${PORT}`);
    } else {
      console.log("Something bad happens while starting server");
    }
  });
  