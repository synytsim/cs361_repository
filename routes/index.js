var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/clusters', function(req, res, next) {
  res.render('clusters');
});

router.get('/galaxies', function(req, res, next) {
  res.render('galaxies');
});

router.get('/nebulae', function(req, res, next) {
  res.render('nebulae');
});

module.exports = router;
