var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/account', function(req, res, next) {
  res.render('account', { title: 'Express' });
});

router.get('/message', function(req, res, next) {
  res.render('message', { title: 'Express' });
});

module.exports = router;
