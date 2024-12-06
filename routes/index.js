var express = require('express');
var router = express.Router();
const axios = require('axios');

// Art category only (ID: 25)
const categories = [
  { id: 25, name: 'Art' }, // Only Art category
];

// GET home page with Art category
router.get('/', function (req, res) {
  res.render('index', { title: 'Art Trivia Quiz', categories: categories });
});

module.exports = router;
