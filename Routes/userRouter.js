const express = require('express')
const userRouter = express.Router()
const userController = require('../Controllers/userController')

userRouter.get('/', userController.getAllUsers)

userRouter.post('/', userController.createUser)

module.exports = userRouter