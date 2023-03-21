const express = require('express');
const userRouter = express.Router();
const validators = require('../middlewares/validators');
const hashPass = require('../middlewares/hashPassMiddle');
const userController = require('../controllers/userController');
const checkToken = require('../middlewares/checkToken');
const upload = require('../utils/fileUpload');

userRouter.post(
    '/registration',
    validators.validateRegistrationData,
    hashPass,
    userController.registration,
  );

userRouter.post(
    '/login',
    validators.validateLogin,
    userController.login,
  );

userRouter.get(
    '/getUser',
    checkToken.checkAuth,
  );

userRouter.put(
    '/updateUser',
    checkToken.checkToken,
    upload.uploadAvatar,
    userController.updateUser,
  );


  module.exports = userRouter;