const { Router } = require('express');
const mainController = require('../controllers/mainController');
const isAuthorized = require('../middlewares/isAuthorized');

const mainRouter = Router();

mainRouter.get('/', mainController.index);
mainRouter.get('/home', isAuthorized, mainController.home);

module.exports = mainRouter;