const siteRouter = require('./site')
const flowerRouter = require('./flowers')
function route(app) {
  //Site page
  app.use('/flowers', flowerRouter)
  app.use('/', siteRouter)

  //GET:req.query(queryparameters)
  //POST:req.body(from data)
}

module.exports = route
