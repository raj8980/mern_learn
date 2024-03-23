const express= require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.5vxwa8x.mongodb.net/user_app");

const userModel= mongoose.model("User",{
    name : String,
    username : String,
    password : String
})

const app = express();
const jwtPwd = "123456";

app.use(express.json());
app.listen(3000);

const allUsers = [
    {
        username : "rajpatel@gmail.com",
        password : "123",
        name : "Raj Patel"
    },
    {
        username : "rishipatel@gmail.com",
        password : "123",
        name : "Rishi Patel"
    },
    {
        username : "rihanpatel@gmail.com",
        password : "123",
        name : "Rihan Patel"
    }
];

function userExists(username, password){
        return allUsers.filter((user)=>{
            return user.username === username && user.password === password
        }).length > 0;
}

app.post("/signup",async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
 

    const existingUser = await userModel.findOne({username : username});
    if(existingUser){
        return res.status(400).send("Username is already exists");
    }

    const user = new userModel({
        username : username,
        password : password,
        name : name
    });

    user.save();
    res.json({
        "msg" : "User successfully signed up."
    });
});

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doesn't exist in our in memory db"
        });
    }

    var token = jwt.sign({username:username},jwtPwd);
    return res.json({
        token
    });
});

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPwd);
        const username = decoded.username;
        res.json({
            users: allUsers.filter((user) =>  {
                return user.username != username;
            })
        })
    }catch(err){
        return res.status(403).json({
            msg:"Invalid Token"
        })
    }
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});
