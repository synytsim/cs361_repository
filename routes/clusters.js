var express = require('express');
var router = express.Router();

/* GET clusters page. */
router.get('/clusters', function(req, res, next) {
  res.render('clusters');
});

module.exports = router;
