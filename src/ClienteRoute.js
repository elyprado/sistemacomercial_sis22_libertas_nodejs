
const ClienteController = require('./ClienteController');
module.exports = (app) => {
   app.post('/Cliente', ClienteController.post);
   app.put('/Cliente/:id', ClienteController.put);
   app.delete('/Cliente/:id', ClienteController.delete);
   app.get('/Cliente', ClienteController.get);
   app.get('/Cliente/:id', ClienteController.getById);
}