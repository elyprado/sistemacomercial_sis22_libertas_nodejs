const CaixaController = require('./CaixaController');
module.exports = (app) => {
   app.post('/caixa', CaixaController.post);
   app.put('/caixa/:id', CaixaController.put);
   app.delete('/caixa/:id', CaixaController.delete);
   app.get('/caixa', CaixaController.get);
   app.get('/caixa/:id', CaixaController.getById);
}
