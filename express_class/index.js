const express = require("express");

const app = express();

app.listen("3000");

app.get("/", (req,res)=>{
    const a=req.query.n;
    const ans= sum(a);
    res.send("Hi There!" + ans);      
});


function sum(n){
    let ans = 0;
    for(let i = 0; i<=n;i++){
        ans += i;
    }
    return ans;
}