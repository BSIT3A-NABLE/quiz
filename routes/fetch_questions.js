// routes/fetch_questions.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { amount, difficulty, quizType } = req.body;

  try {
    // Fetch questions from Open Trivia Database
    const response = await axios.get('https://opentdb.com/api.php', {
      params: {
        amount,
        difficulty,
        type: quizType,
        category: 25  // Assuming category 25 is Art
      }
    });

    const questions = response.data.results.map(question => ({
      question: question.question,
      correct_answer: question.correct_answer,
      incorrect_answers: question.incorrect_answers
    }));

    // Send formatted questions to the frontend
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions. Try again later.' });
  }
});

module.exports = router;
