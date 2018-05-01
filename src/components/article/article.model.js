const mongoose = require('mongoose')
const searchPlugin = require('mongoose-search-plugin')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  'title': {
    'type': String,
    'required': true
  },
  'url': {
    'type': String,
    'required': true
  },
  'author': {
    'type': String,
    'required': true
  },
  'description': {
    'type': String,
    'required': true
  },
  'created_at': {
    'type': Date,
    'default': Date.now
  }
})

articleSchema.plugin(searchPlugin, {
  'fields': ['title', 'url', 'author', 'description']
})

module.exports = mongoose.model('Article', articleSchema)
