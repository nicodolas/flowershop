const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

//search
router.get('/search', siteController.search)
//home
router.get('/', siteController.home)

module.exports = router
