//index.js
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
const ProdutoRoute = require('./ProdutoRoute');
const MarcaRoute = require('./MarcaRoute')
const VendaRoute = require('./VendaRoute');
module.exports = (app) => {
   UsuarioRoute(app)
   VendedorRoute(app)
   ProdutoRoute(app)
   MarcaRoute(app)
   VendaRoute(app)
}
