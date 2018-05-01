const Website = require('./website.model.js')

const controller = {
  list: (req, res) => {
    Website.find().exec((err, _websites) => {
      if (err) {
        res.render('website_list',
        {
          data: []
        })
      } else {
        res.render('website_list',
        {
          data: _websites
        })
      }
    })
  },
  add: (req, res) => {
    res.render('website_add');
  },
  addVerify: (req, res) => {
    const _website = new Website(req.body)

    _website.save((err) => {
      if (err && err.name === 'ValidationError') {
        res.render('website_add', {
          '_errors': err.errors
        })
      } else {
        res.render('website_add', {
          '_success': true
        })
      }
    })
  },
  apiList: (req, res) => {
    Website.find().exec((err, _websites) => {
      if (err) {
        res.json({
          data: []
        })
      } else {
        res.json({
          data: _websites
        })
      }
    })
  }
}

module.exports = controller
