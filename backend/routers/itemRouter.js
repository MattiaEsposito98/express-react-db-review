const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

// index
router.get('/item', itemController.index)

module.exports = router