const controller = {
  add: (req, res) => {
    res.render('website_add');
  },
  list: (req, res) => {
    res.render('website_list');
  }
}

module.exports = controller
