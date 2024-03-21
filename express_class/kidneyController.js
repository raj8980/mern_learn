const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

const patientRegSchema = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal(US)),
    kidneys : zod.array(zod.number())
});

app.use(express.json());

app.post("/health-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    })
    // const kidneyLength = kidneys.length;

    // res.send("You have "+ kidneyLength + " kidneys");
});

//global catches
app.use(function(err,req,res,next){
    res.json({
        msg : "Sorry something is with server" 
    });

});

app.listen(3000);
