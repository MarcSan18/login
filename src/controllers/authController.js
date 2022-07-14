const authController = {
    getLoginScreen: (request, response) => {
        return response.render('index');
    },
    login: (request, response) => {

    }
}

module.exports = authController;