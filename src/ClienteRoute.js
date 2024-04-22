
const ClienteController = require('./ClienteController');
module.exports = (app) => {
   app.post('/cliente', ClienteController.post);
   app.put('/cliente/:id', ClienteController.put);
   app.delete('/cliente/:id', ClienteController.delete);
   app.get('/cliente', ClienteController.get);
   app.get('/cliente/:id', ClienteController.getById);
}