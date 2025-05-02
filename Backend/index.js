import express from "express";
import { Todo } from "./db.js";
import { createtodo } from "./types.js";
const app = express();
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createpayload = req.body;
  const parsepayload = createtodo.safeParse(createpayload);
  if (!parsepayload.success) {
    res.status(411).json({
      message: "Wrong input",
    });
    return;
  }
  await Todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
    createdAt: new Date(),
  });
  res.status(201).json({
    message: "Todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  if (!todos) {
    res.status(404).json({
      msg: "No todos found",
    });
    return;
  }
  res.status(200).json(todos);
});

app.put("/completed", async (req, res) => {
  const updatedpayload = req.body;
  const updatedparsepayload = createtodo.safeParse(updatedpayload);
  if (!updatedparsepayload.success) {
    res.status(411).json({
      message: "Wrong input",
    });
    return;
  }
  await Todo.updateOne(
    { _id: updatedpayload.id },
    { $set: { completed: true } }
  );

  res.status(200).json({
    message: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
