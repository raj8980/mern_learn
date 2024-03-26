const mongoose = require("mongoose");

mongoose.connect("db_url");

const todoSchema = mongoose.Schema({
    title :  String,
    description : String,
    completed : Boolean
});

const todo = mongoose.Model("todo",todoSchema);
