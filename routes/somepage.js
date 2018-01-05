var express = require('express');
var router = express.Router();

/* GET some page. */
router.get('/', function(req, res, next) {
  res.render('private/somepage', { title: 'Express' });
});

module.exports = router;
