const express = require("express");

const app = express();

app.listen("3000");

const users = [{
    name : "Raj",
    kidneys :[{
        healthy : false
    }]
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