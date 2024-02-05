const express = require("express");
const TaskController = require('../Controllers/TaskController');
const router = express.Router();

// Use plural form for resource names
router.get('/tasks' , TaskController.getTasks);
router.get('/tasks/:id' , TaskController.getOneTasks);
router.get('/tasksByTitle', TaskController.getTaskByTitle);
router.post('/tasks' ,validateToken, TaskController.addNewTask);
router.put('/tasks/:id',validateToken, TaskController.updateTask);
router.delete('/tasks/:id',validateToken, TaskController.deleteTask);
router.get('/tasksByTitle',validateToken, TaskController.getTaskByTitle);

module.exports = router ;
 



