const express = require("express");
const TaskController = require('../Controllers/TaskController');
const router = express.Router();

// Use plural form for resource names
router.get('/tasks' , TaskController.getTasks);
router.get('/tasks/:id' , TaskController.getOneTasks);
router.get('/tasksByTitle', TaskController.getTaskByTitle);
router.post('/tasks' , TaskController.addNewTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);
router.get('/tasksByTitle', TaskController.getTaskByTitle);

module.exports = router ;




