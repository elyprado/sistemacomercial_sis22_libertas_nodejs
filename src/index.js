//index.js
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
const ProdutoRoute = require('./ProdutoRoute');
const MarcaRoute = require('./MarcaRoute')
const VendaRoute = require('./VendaRoute');
const CompraRoute = require('./CompraRoute');
const CaixaRoute = require('./CaixaRoute');
const ClienteRoute = require('./ClienteRoute');
const ContasReceberRoute = require('./ContasReceberRoute')
module.exports = (app) => {
   ClienteRoute(app)
   UsuarioRoute(app)
   CaixaRoute(app)
   VendedorRoute(app)
   ProdutoRoute(app)
   MarcaRoute(app)
   VendaRoute(app)
   CompraRoute(app)
   ContasReceberRoute(app)
}
