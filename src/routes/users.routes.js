const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/', usersController.getCreateScreen);
usersRouter.post('/', usersController.create);

module.exports = usersRouter;