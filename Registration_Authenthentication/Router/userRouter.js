const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController');



userRouter.get('/',userController.home);
userRouter.get('/registration',userController.registration);

userRouter.post('/registration',userController.createdocform);
userRouter.get('/login',userController.login);
userRouter.post('/login',userController.verifylogin);


module.exports = userRouter;