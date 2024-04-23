const ContasReceber = require('./ContasReceberController');
module.exports = (app) => {
   app.post('/contasreceber', ContasReceber.post);
   app.put('/contasreceber/:id', ContasReceber.put);
   app.delete('/contasreceber/:id', ContasReceber.delete);
   app.get('/contasreceber', ContasReceber.get);
   app.get('/contasreceber/:id', ContasReceber.getById);
}