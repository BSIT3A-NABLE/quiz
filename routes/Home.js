var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res, next) {
  res.render('Home'); // Renders Home.ejs from the 'views' folder
});

module.exports = router;
