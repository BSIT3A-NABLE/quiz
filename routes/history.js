var express = require('express');
var router = express.Router();

// Render the history page when accessing "/history"
router.get('/', function(req, res, next) {
  res.render('history', { title: 'History of Art' });  // Renders history.ejs
});

module.exports = router;
