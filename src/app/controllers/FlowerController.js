const Flowers = require('../models/Flower')

class FlowersController {
  //[GET] /flowers/:slug
  show(req, res, next) {
    Flowers.findOne({ slug: req.params.slug })
      .lean()
      .then((flower) => {
        res.render('flowers/show', { flower: flower })
      })
      .catch(next)
  }
  //[GET] /flowers/create
  create(req, res, next) {
    res.render('flowers/create')
  }
  //[POST] /flowers/store
  async store(req, res, next) {
    const flower = new Flowers(req.body)
    await flower
      .save()
      .then(() => res.redirect('/'))
      .catch(next)
  }
}

//export ra ngoai  || require vao
module.exports = new FlowersController()
