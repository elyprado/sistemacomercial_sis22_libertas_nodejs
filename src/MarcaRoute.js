const MarcaRoute = require('./MarcaController');
module.exports = (app) => {
    app.post('/marca', MarcaRoute.post);
    app.put('/marca/:id', MarcaRoute.put);
    app.delete('/marca/:id', MarcaRoute.delete);
    app.get('/marca', MarcaRoute.get);
    app.get('/marca/:id', MarcaRoute.getById);
}