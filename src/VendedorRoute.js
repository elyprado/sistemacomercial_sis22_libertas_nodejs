//VendedorRoute.js
const VendedorController = require('./VendedorController');
module.exports = (app) => {
   app.post('/vendedor', VendedorController.post);
   app.put('/vendedor/:id', VendedorController.put);
   app.delete('/vendedor/:id', VendedorController.delete);
   app.get('/vendedor', VendedorController.get);
   app.get('/vendedor/:id', VendedorController.getById);
}