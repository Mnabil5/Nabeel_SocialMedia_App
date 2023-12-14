import jwt from "jsonwebtoken";

const authenticateMiddelware = (req, res, next) => {

    try {
        let token = req.headers.authorization;
        token = token.replace("Bearer ", "");
        jwt.verify(token,process.env.SECRET_KEY);
        
    
        if (!req.session.user || !req.session.token) {
          return res.status(401).json({
            message: "Invalid request (user or token)",
          });
        }
        if (req.session.token !== token) {
          return res.status(401).json({
            message: "Invalid request token not match",
          });
        }
        next();
      } catch (error) {
        return res.status(401).json({
          message: "Invalid request",
        });
      }
    };

export default authenticateMiddelware;
