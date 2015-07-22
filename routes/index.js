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

/* GET Home page */
router.get('/', function(req, res) {

  res.render('index', {title: 'mymediadb'});
});

/* GET Library page */
router.get('/library', function(req, res) { 

  res.render('library', {title: 'mymediadb'}); 
});

/* GET Media Swap page */
router.get('/mediaswap', function(req, res) { 

  res.render('mediaswap', {title: 'mymediadb'}); 
});

/* GET Wishlist page */
router.get('/wishlist', function(req, res) { 

  res.render('wishlist', {title: 'mymediadb'}); 
});

/* GET Profile page */
router.get('/profile', function(req, res) { 

  res.render('profile', {title: 'mymediadb'}); 
});

/* GET Settings page */
router.get('/settings', function(req, res) { 

  res.render('settings', {title: 'mymediadb'}); 
});

/* GET About page */
router.get('/about', function(req, res) { 

  res.render('about', {title: 'mymediadb'}); 
});

/* GET Login page */
router.get('/login', function(req, res) { 

  res.render('login', {title: 'mymediadb'}); 
});

module.exports = router;