const ProdutoController = require('./ProdutoController');
module.exports = (app) => {
   app.post('/produto', ProdutoController.post);
   app.put('/produto/:id', ProdutoController.put);
   app.delete('/produto/:id', ProdutoController.delete);
   app.get('/produto', ProdutoController.get);
   app.get('/produto/:id', ProdutoController.getById);
}
