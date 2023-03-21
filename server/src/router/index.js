const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const userRouter = require('./user');
const offerRouter = require('./offer');
const paymentRouter = require('./payment');
const contestRouter = require('./contest');
const chatRouter = require('./chat');
const catalogRouter = require('./catalog');
const userController = require('../controllers/userController');
const checkToken = require('../middlewares/checkToken');
const router = express.Router();

router.use('/users', userRouter);

router.use('/contests', contestRouter);

router.use('/offers', offerRouter);

router.use('/payment', paymentRouter);

router.use('/chat', chatRouter);

router.use('/catalogs', catalogRouter);



router.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);


module.exports = router;
