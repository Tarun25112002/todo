import mongoose from 'mongoose';

mongoose.connect(
  "mongodb+srv://"
);
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

export const Todo = mongoose.model('Todo', todoSchema,'Data');

