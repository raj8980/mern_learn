const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.status(200).json({
    todos,
  });
});

app.post("/add-todo", async (req, res) => {

  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  } else {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });

    res.status(200).json({
      msg: "Todo created successfully",
    });
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  } else {
    await todo.findOneAndUpdate({ _id: updatePayload.id }, { completed: true });
    res.status(200).json({
      msg: "Todo marked as completed",
    });
  }
});

app.listen(3000);
