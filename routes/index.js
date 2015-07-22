var express = require('express');
var request = require('request');
var router = express.Router();

/* build JSON response */
router.get('/tweets', function(req, res) {

    /* make the request to Twitter */
    request('https://userstream.twitter.com/1.1/user.json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
});

/* GET home page */
router.get('/', function(req, res) {

  res.render('index', {title: 'mymediadb'});
});

router.get('/about', function(req, res) { 

  res.render('about', {title: 'mymediadb'}); 
});

module.exports = router;