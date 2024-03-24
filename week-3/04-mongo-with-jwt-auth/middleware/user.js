const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");

function userMiddleware(req, res, next) {
    const token= req.headers["authorization"];
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token
    
    try{
      const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

      if (decodedValue.username) {    
          req.username = decodedValue.username;
          req.randomData = "Adsadsadsadssd";
          next();
      }
    }catch(e){
       console.log(e);
       res.json({"message":"token is invalid"});
    }
}

module.exports = userMiddleware;