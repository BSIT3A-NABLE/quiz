// In routes/quiz.js
var express = require('express');
var router = express.Router();

// Render the quiz page when the user navigates to "/quiz"
router.get('/', function(req, res, next) {
  res.render('quiz');  // Render the 'quiz.ejs' page
});

module.exports = router;
