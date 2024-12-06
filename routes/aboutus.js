// routes/aboutus.js

var express = require('express');
var router = express.Router();

// GET route for the About Us page
router.get('/', function(req, res, next) {
  res.render('aboutus', { title: 'About Us' });
});

module.exports = router;
