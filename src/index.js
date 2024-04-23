//index.js
const ContasaPagarRoute = require('./ContasapagarRoute')
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
const ProdutoRoute = require('./ProdutoRoute');
const MarcaRoute = require('./MarcaRoute')
const VendaRoute = require('./VendaRoute');
const CompraRoute = require('./CompraRoute');
const CaixaRoute = require('./CaixaRoute');
const ClienteRoute = require('./ClienteRoute');
const ContasReceberRoute = require('./ContasReceberRoute')
const FornecedorRoute = require('./FornecedorRoute');
const CidadeRoute = require('./CidadeRoute');
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
   FornecedorRoute(app)
   CidadeRoute(app)
   ContasaPagarRoute(app)
}
