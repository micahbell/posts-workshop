var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/posts-workshop');
var Post = db.get('posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/posts', function(req, res, next) {
  Post.find({}).then(function (records) {
    res.json(records);
  });
});

module.exports = router;
