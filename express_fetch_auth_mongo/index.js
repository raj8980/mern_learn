const express= require("express");
const app = express();
const jwt = require("jsonwebtoken");
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
    
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});
