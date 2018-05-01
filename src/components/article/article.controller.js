const Article = require('./article.model.js')

const controller = {
  list: (req, res) => {
    Article.find().exec((err, _articles) => {
      if (err) {
        res.render('article_list', 
        {
          data: []
        })
      } else {
        res.render('article_list', 
        {
          data: _articles
        })
      }
    })
  },
  add: (req, res) => {
    res.render('article_add');
  },
  addVerify: (req, res) => {
    const _article = new Article(req.body)

    _article.save((err) => {
      if (err && err.name === 'ValidationError') {
        res.render('article_add', {
          '_errors': err.errors
        })
      } else {
        res.render('article_add', {
          '_success': true
        })
      }
    })
  },
  apiList: (req, res) => {
    Article.find().exec((err, _articles) => {
      if (err) {
        res.json({
          data: []
        })
      } else {
        res.json({
          data: _articles
        })
      }
    })
  }
}

module.exports = controller
