const mainController = {
    index: (request, response) => {
        return response.redirect('/auth');
    },
    home: (request, response) => {
        console.log(request.session);
        return response.render('home');
    },
}

module.exports = mainController;