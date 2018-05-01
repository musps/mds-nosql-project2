const express = require('express')
const router = express.Router()
const controller = require('./error.controller')

router.all('*', controller.main)

module.exports = router
