const {Admin} =require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    Admin.findOne({username : req.headers['username'] ,password : req.headers['password']}).then((val)=>{
        if(val){
            next();
        }else{
            return res.status(403).json({msg : "username or password is invalid"});
        }
    });
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;