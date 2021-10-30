var express = require('express');
var router = express.Router();

/* GET nebulae page. */
router.get('/nebulae', function(req, res, next) {
  res.render('nebulae');
});

module.exports = router;
