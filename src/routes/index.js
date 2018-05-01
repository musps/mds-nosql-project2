const article = require('../components/article')
const website = require('../components/website')

exports.config = (app) => {
  app.use('/article', article)
  app.use('/website', website)
}
