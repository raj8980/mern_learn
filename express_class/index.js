const express = require("express");
 
const app = express();
app.use(express.json());
app.listen("3000");

const users = [{
    name : "Raj",
    kidneys :[{
        healthy : false
    },{
        healthy : false
    },{
        healthy : false
    }
]
}];

app.get("/", (req,res) => {
    const patientKidney=users[0].kidneys;
    const numberOfKidneys = patientKidney.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<numberOfKidneys ; i++){
        if(patientKidney[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.send({
        "number  of kidneys " : numberOfKidneys,
        "number of healthy kidneys" : numberOfHealthyKidneys,
        "number of unhealthy kidneys" : numberOfUnhealthyKidneys 
    });  
}); 

app.post("/", (req,res) =>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });

    res.json({
        msg : "Done !"
    });
});

app.put("/", (req,res) => {
    for(let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.send({"msg" : "Done" });
});



app.delete("/",(req,res) => {

    users[0].kidneys= users[0].kidneys.filter(kidney =>{
        return kidney.healthy === true;
    });
    
    res.json({"msg" : "success"});
});