const express = require('express')
const path = require('path')
const app = express()
const server = require('http').createServer(app)
const routes = require('./routes')

/**
  * Config.
  */
app.use(express.static(__dirname + '/../node_modules'))
app.use('/assets', express.static(__dirname + '/assets'))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


routes.config(app)

server.listen(3000, () => {
  console.log('==========================================');
  console.log('Server started on port 3000')
  console.log('[url] http://localhost:3000')
  console.log('[url] http://127.0.0.1:3000/')
})
