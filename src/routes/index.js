const article = require('../components/article')
const website = require('../components/website')
const search = require('../components/search')
const error = require('../components/error')

exports.config = (app) => {
  app.use('/', search)
  app.use('/article', article)
  app.use('/website', website)
  app.use('*', error)
}
