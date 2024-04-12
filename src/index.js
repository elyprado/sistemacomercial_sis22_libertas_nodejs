//index.js
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
module.exports = (app) => {
   UsuarioRoute(app)
   VendedorRoute(app)
}
