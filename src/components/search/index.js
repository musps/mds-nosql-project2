const express = require('express')
const router = express.Router()
const controller = require('./search.controller')

router.get('/', controller.home)
router.post('/', controller.search)

module.exports = router

