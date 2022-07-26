const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/register', usersController.getCreateScreen);
usersRouter.post('/', usersController.create);


module.exports = usersRouter;