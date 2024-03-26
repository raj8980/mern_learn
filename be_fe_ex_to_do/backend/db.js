const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.f4348at.mongodb.net/todo_app");

const todoSchema = mongoose.Schema({
    title :  String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model("todo",todoSchema);

module.exports = {
    todo
} 
