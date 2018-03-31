var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('news.html', { title: 'Express' });
});
router.get('/us', function(req, res, next){
  res.render('about.html',{});
});
router.get('/shows', function(req, res, next){
  res.render('shows.html', {});
});

module.exports = router;
