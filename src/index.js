//index.js
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
const ProdutoRoute = require('./ProdutoRoute');
<<<<<<< HEAD
const VendaRoute = require('./VendaRoute');
=======
const MarcaRoute = require('./MarcaRoute')
>>>>>>> 38903b05ad91e37adf9f0f3bf4776bdcd0eaf98d
module.exports = (app) => {
   UsuarioRoute(app)
   VendedorRoute(app)
   ProdutoRoute(app)
<<<<<<< HEAD
   VendaRoute(app)
=======
   MarcaRoute(app)
>>>>>>> 38903b05ad91e37adf9f0f3bf4776bdcd0eaf98d
}
