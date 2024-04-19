const ProdutoController = require('./CompraController');
module.exports = (app) => {
   app.post('/compra', ProdutoController.post);
   app.put('/compra/:id', ProdutoController.put);
   app.delete('/compra/:id', ProdutoController.delete);
   app.get('/compra', ProdutoController.get);
   app.get('/compra/:id', ProdutoController.getById);
}