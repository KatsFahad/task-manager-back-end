const express = require('express')
const userRouter = express.Router()
const userController = require('../Controllers/userController')

userRouter.get('/', userController.getAllUsers)

module.exports = userRouter