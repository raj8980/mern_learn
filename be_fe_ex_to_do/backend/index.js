const express = require("express");
const { createTodo,updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.get("/todos",(req,res)=>{


});

app.post("/add-todo",(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(401).json({
            msg : "You sent the wrong inputs"
        });
        return;
    } else{

    }

});

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(401).json({
            msg : "You sent the wrong inputs"
        });
        return;
    } else{

    }
});
