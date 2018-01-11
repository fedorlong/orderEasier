var express = require('express');
var router = express.Router();

/* GET video list page. */
router.get('/', function(req, res, next) {
  res.render('private/videoList', { title: 'Express' });
});

module.exports = router;
