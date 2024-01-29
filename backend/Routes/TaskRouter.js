const express = require("express");
const Taskes =require ("../Models/TaskRouter")
const taskController = require('../Controllers/taskControllers');
const router = express.Router();


router.get('/getTask', userController.getTasks);
router.getbyid('/getTask', userController.getTasks);

