const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
   const token= req.headers["authorization"];
   const words = token.split(" "); // ["Bearer", "token"]
   const jwtToken = words[1]; // token
   
   try{
      console.log("token:",jwtToken);
      console.log("secret",JWT_SECRET);
      jwt.verify(jwtToken,JWT_SECRET);
      next();
   }catch(e){
      console.log(e);
      res.json({"message":"token is invalid"});
   }
   
   

}

module.exports = adminMiddleware;