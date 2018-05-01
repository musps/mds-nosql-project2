const express = require('express')
const router = express.Router()
const controller = require('./website.controller')

router.get('/ping', controller.ping)

module.exports = router
