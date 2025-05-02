import mongoose from 'mongoose';

mongoose.connect(
  "mongodb+srv://Tarun_Jha:1jn4mYARFA6wthsQ@tarun2002.ufv9tlf.mongodb.net/First_DataBase"
);
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

export const Todo = mongoose.model('Todo', todoSchema,'Data');

