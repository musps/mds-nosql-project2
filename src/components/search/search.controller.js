const Article = require('./../article/article.model.js')
const Website = require('./../website/website.model.js')

const controller = {
  home: (req, res) => {
    res.render('search')
  },
  searchWebsite: (req, res) => {
    Website.search(
      req.body.query,
      {
        'title': 1,
        'url': 1,
        'description': 1
      },
      {},
      (err, data) => {
        res.render('search', {
          'count': data.totalCount,
          'data': data.results,
          'target': 'website'
        })
        console.log(data.results);
        console.log(data.totalCount);
      }
    );
  },
  searchArticle: (req, res) => {
    Article.search(
      req.body.query,
      {
        'title': 1,
        'url': 1,
        'author': 1,
        'description': 1
      },
      {},
      (err, data) => {
        res.render('search', {
          'count': data.totalCount,
          'data': data.results,
          'target': 'article'
        })
        console.log(data.results);
        console.log(data.totalCount);
      }
    );
  },
  search: (req, res) => {
    switch (req.body.target) {
      case 'article':
        controller.searchArticle(req, res)
        break;
      case 'website':
        controller.searchWebsite(req, res)
        break;
      default:
        res.render('search')
        break;
    }
  },
}

module.exports = controller
