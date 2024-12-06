// routes/triviaRouter.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to get art-related trivia questions
router.get('/', async (req, res) => {
    try {
        // Fetch trivia questions from OpenTDB API
        const response = await axios.get('https://opentdb.com/api.php', {
            params: {
                amount: 10, // Number of questions
                category: 25, // Art category ID
                type: 'multiple', // Multiple choice questions
            },
        });

        // Pass the questions to the EJS view (server.ejs)
        const questions = response.data.results;
        res.render('server', { questions });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching trivia questions');
    }
});

module.exports = router;
