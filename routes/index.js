var express = require('express');
var router = express.Router();
var chapter1 = require('./build/Release/chapter1.node');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',chapterone:chapter1 });
});

module.exports = router;
