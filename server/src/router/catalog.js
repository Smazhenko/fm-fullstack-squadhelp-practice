const express = require('express');
const catalogRouter = express.Router();
const checkToken = require('../middlewares/checkToken');
const chatController = require('../controllers/chatController');



catalogRouter.post(
    '/createCatalog',
    checkToken.checkToken,
    chatController.createCatalog,
  );
  
  catalogRouter.put(
    '/updateNameCatalog',
    checkToken.checkToken,
    chatController.updateNameCatalog,
  );
  
  catalogRouter.post(
    '/addNewChatToCatalog',
    checkToken.checkToken,
    chatController.addNewChatToCatalog,
  );
  
  
  
  catalogRouter.delete(
    '/deleteCatalog',
    checkToken.checkToken,
    chatController.deleteCatalog,
  );
  
  catalogRouter.get(
    '/getCatalogs',
    checkToken.checkToken,
    chatController.getCatalogs,
  );



module.exports = catalogRouter;