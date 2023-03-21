const express = require('express');
const chatRouter = express.Router();
const checkToken = require('../middlewares/checkToken');
const chatController = require('../controllers/chatController');




chatRouter.post(
    '/newMessage',
    checkToken.checkToken,
    chatController.addMessage,
  );
  
  chatRouter.get(
    '/getChat/:id',
    checkToken.checkToken,
    chatController.getChat,
  );
  
  chatRouter.get(
    '/getPreview',
    checkToken.checkToken,
    chatController.getPreview,
  );
  
  chatRouter.put(
    '/blackList',
    checkToken.checkToken,
    chatController.blackList,
  );
  
  chatRouter.put(
    '/favorite',
    checkToken.checkToken,
    chatController.favoriteChat,
  );
  chatRouter.delete(
    '/removeChatFromCatalog',
    checkToken.checkToken,
    chatController.removeChatFromCatalog,
  );
  






module.exports = chatRouter;