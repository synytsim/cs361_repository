var express = require('express');
var router = express.Router();

/* GET galaxies page. */
router.get('/galaxies', function(req, res, next) {
  res.render('galaxies');
});

module.exports = router;
