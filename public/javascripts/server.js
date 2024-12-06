// server.js
const express = require('express');
const app = express();
const axios = require('axios');

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Import and use the triviaRouter
const triviaRouter = require('./routes/triviaRouter');
app.use('/', triviaRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
