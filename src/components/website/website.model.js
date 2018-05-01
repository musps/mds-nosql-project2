const mongoose = require('mongoose')
const searchPlugin = require('mongoose-search-plugin')
const Schema = mongoose.Schema

const websiteSchema = new Schema({
  'title': {
    'type': String,
    'required': true
  },
  'url': {
    'type': String,
    'required': true
  },
  'description': {
    'type': String,
  },
  'created_at': {
    'type': Date,
    'default': Date.now
  }
})

websiteSchema.plugin(searchPlugin, {
  fields: ['title', 'url', 'description']
})

module.exports = mongoose.model('Website', websiteSchema)
