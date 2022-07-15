const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const userPath = path
    .join(__dirname, '..', 'database', 'users.json');

const authController = {
    getLoginScreen: (request, response) => {
        return response.render('index');
    },
    login: (request, response) => {
        const { login, password } = request.body;

        const users = JSON.parse(fs.readFileSync(userPath));

        const userFound = users.find(user => user.login === login);

        if (!userFound) {
            return response.status(401).redirect('/');
        }

        const ehSenhaCorreta = bcrypt.compareSync(password, userFound.password);

        if (!ehSenhaCorreta) {
            return response.status(401).redirect('/');
        }

        request.session.idUser = userFound.id
        request.session.isAuthorized = true

        return response.redirect('/home');
    }
}

module.exports = authController;