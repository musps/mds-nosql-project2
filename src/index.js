const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const app = express()
const server = require('http').createServer(app)
const routes = require('./routes')

mongoose.connect('mongodb://localhost/searchengine')
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection opened')
})

/**
  * Config.
  */
app.use(express.static(__dirname + '/../node_modules'))
app.use('/assets', express.static(__dirname + '/assets'))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname, '/assets/img', 'favicon.ico')))
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'))

routes.config(app)

server.listen(3000, () => {
  console.log('==========================================');
  console.log('Server started on port 3000')
  console.log('[url] http://localhost:3000')
  console.log('[url] http://127.0.0.1:3000/')
})

