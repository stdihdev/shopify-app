const Controller = require('./controller')

module.exports = (app) => {
  // TODO: Is collections necessary?
  // app.get('/api/collections', Controller.getCollections)
  app.get('/api/products', Controller.getProducts)
  app.get('/api/create_user', Controller.createUser)
}