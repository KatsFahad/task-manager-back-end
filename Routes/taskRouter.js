const express = require('express')
const taskRouter = express.Router()
const taskController = require('../Controllers/taskController')

taskRouter.get('/', taskController.getAllTasks)

taskRouter.post('/', taskController.addNewTask)

taskRouter.get('/:id', taskController.getTaskById)

module.exports = taskRouter