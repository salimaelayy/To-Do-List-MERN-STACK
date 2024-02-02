//models/T
const mongoose = require('mongoose');

const  TasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        required: true,
        default: null, // Initially, the document is not soft deleted


    },
    createdBy: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    comments: {
        type: String
    }
});

const Task = mongoose.model("Task",TasksSchema) //creer mongoose model  collection

module.exports=Task;
