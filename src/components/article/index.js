const express = require('express')
const router = express.Router()
const controller = require('./article.controller')

router.get('/add', controller.add)
router.get('/list', controller.list)

module.exports = router
