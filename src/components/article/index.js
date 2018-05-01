const express = require('express')
const router = express.Router()
const controller = require('./article.controller')

router.get('/ping', controller.ping)

module.exports = router
