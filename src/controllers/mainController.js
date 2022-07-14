const mainController = {
    index: (request, response) => {
        return response.redirect('/auth');
    },
}

module.exports = mainController;