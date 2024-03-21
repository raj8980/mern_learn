const express= require("express");
const app = express();

app.use(express.json());
app.listen(3000);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});
