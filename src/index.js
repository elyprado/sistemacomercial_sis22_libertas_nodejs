//index.js
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
const ProdutoRoute = require('./ProdutoRoute');
const VendaRoute = require('./VendaRoute');
module.exports = (app) => {
   UsuarioRoute(app)
   VendedorRoute(app)
   ProdutoRoute(app)
   VendaRoute(app)
}
