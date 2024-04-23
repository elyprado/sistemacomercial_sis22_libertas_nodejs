const ContasapagarController = require('./ContasapagarController')
module.exports = (app) => {
    app.post('/contasapagar/', ContasapagarController.post)
    app.put('/contasapagar/:id', ContasapagarController.put)
    app.delete('/contasapagar/:id', ContasapagarController.delete)
    app.get('/contasapagar', ContasapagarController.get)
    app.get('/contasapagar/:id', ContasapagarController.getById)
}

