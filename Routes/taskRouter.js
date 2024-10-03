const express = require('express')
const taskRouter = express.Router()
const taskController = require('../Controllers/taskController')

taskRouter.get('/', taskController.getAllTasks)

taskRouter.post('/', taskController.addNewTask)

taskRouter.get('/:id', taskController.getTaskById)

taskRouter.delete('/:id', taskController.deleteById)

taskRouter.put('/:id', taskController.updateTask)

taskRouter.delete('/deleteall', taskController.deleteAllTasks)

module.exports = taskRouter