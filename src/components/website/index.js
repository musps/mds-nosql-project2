const express = require('express')
const router = express.Router()
const controller = require('./website.controller')

router.get('/add', controller.add)
router.post('/add', controller.addVerify)
router.get('/', controller.list)
router.get('/api/list', controller.apiList)

module.exports = router
