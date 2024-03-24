const {User} =require("../db");

function userMiddleware(req, res, next) {
    User.findOne({username : req.headers['username'], password : req.headers['password']}).then((val)=>{
        if(val){
            next();
        }else{
            return res.status(403).json({msg:"username or password is invalid"});
        }
    })
}

module.exports = userMiddleware;