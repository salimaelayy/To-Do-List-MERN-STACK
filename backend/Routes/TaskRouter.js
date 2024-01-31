const express = require("express");
<<<<<<< HEAD
const Taskes =require ("../Models/TaskRouter")
const taskController = require('../Controllers/taskControllers');
const router = express.Router();


router.get('/getTask', userController.getTasks);
router.getbyid('/getTask', userController.getTasks);
=======
const TaskController = require('../Controllers/TaskController');
const router = express.Router();

// Use plural form for resource names
router.get('/tasks' , TaskController.getTasks);
router.get('/tasks/:id' , TaskController.getOneTasks);
router.post('/tasks' , TaskController.addNewTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);
router.get('/tasksByTitle', TaskController.getTaskByTitle);

module.exports = router ;



>>>>>>> cca716ebb48a7131cb6102a666c92857ab6cd542

