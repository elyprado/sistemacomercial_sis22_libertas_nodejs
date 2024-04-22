const ContasReceber = require('./ContasReceberController');
module.exports = (app) => {
   app.post('/ContasReceber', ContasReceber.post);
   app.put('/ContasReceber/:id', ContasReceber.put);
   app.delete('/ContasReceber/:id', ContasReceber.delete);
   app.get('/ContasReceber', ContasReceber.get);
   app.get('/ContasReceber/:id', ContasReceber.getById);
}