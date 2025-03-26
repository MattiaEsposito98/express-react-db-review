const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

// index
router.get('/item', itemController.index)

// show
router.get('/item/:id', itemController.show)

module.exports = router