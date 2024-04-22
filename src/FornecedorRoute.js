const FornecedorController = require('./FornecedorController');
module.exports = (app) => {
   app.post('/fornecedor', FornecedorController.post);
   app.put('/fornecedor/:id', FornecedorController.put);
   app.delete('/fornecedor/:id', FornecedorController.delete);
   app.get('/fornecedor', FornecedorController.get);
   app.get('/fornecedor/:id', FornecedorController.getById);
};