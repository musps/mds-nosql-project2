const controller = {
  add: (req, res) => {
    res.render('article_add');
  },
  list: (req, res) => {
    res.render('article_list');
  }
}

module.exports = controller
