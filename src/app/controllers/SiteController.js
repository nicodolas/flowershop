//Dùng để lưu những site ít controller:home,search...
const Flower = require('../models/Flower')

class SiteController {
  async home(req, res, next) {
    //sử dụng Promise
    Flower.find({})
      .lean()
      .then((flower) => {
        res.render('home', {
          flower: flower,
        })
      })
      .catch((error) => next(error))
  }

  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
