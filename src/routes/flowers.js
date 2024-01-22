const express = require('express')
const router = express.Router()

const flowerController = require('../app/controllers/FlowerController')

//format chung: '/:slug'
//router.use('/:slug',blogController.(slug));

//newsController.index;
router.get('/create', flowerController.create)
router.post('/store', flowerController.store)
router.get('/:slug', flowerController.show)

module.exports = router
