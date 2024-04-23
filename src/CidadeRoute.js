const CidadeController = require('./CidadeController');

module.exports = (app) =>{
    app.post('/cidade', CidadeController.post);
    app.post('/sobre', CidadeController.post);
    app.put('/cidade/:id', CidadeController.put);
    app.delete('/cidade/:id', CidadeController.delete);
    app.get('/cidade', CidadeController.get);
    app.get('/cidade/:id', CidadeController.getById);
};