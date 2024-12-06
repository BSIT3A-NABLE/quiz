// routes/gallery.js
const express = require('express');
const router = express.Router();

// Route for rendering the gallery page
router.get('/', (req, res) => {
  res.render('gallery', { artworks: [] });  // Pass some sample data or actual data
});

module.exports = router;
