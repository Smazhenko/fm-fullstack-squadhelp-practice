const express = require('express');
const paymentRouter = express.Router();
const checkToken = require('../middlewares/checkToken');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const upload = require('../utils/fileUpload');
const validators = require('../middlewares/validators');
const userController = require('../controllers/userController');


paymentRouter.post(
    '/pay',
    checkToken.checkToken,
    basicMiddlewares.onlyForCustomer,
    upload.uploadContestFiles,
    basicMiddlewares.parseBody,
    validators.validateContestCreation,
    userController.payment,
  );
  

  paymentRouter.post(
    '/cashout',
    checkToken.checkToken,
    basicMiddlewares.onlyForCreative,
    userController.cashout,
  );
  
  module.exports = paymentRouter;