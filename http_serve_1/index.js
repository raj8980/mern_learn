const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log(`Example App listening on port ${port}`);
});

app.post("/login",(req,res)=>{
     console.log(req.body.username);
     console.log(req.headers);
     res.send("successfully loggedin");
});