var express = require("express");
var router = express.Router();
const QuizResult = require("./../models/QuizResult");

// Result page route
router.get("/", async function (req, res, next) {
  try {
    const quizResults = await QuizResult.find({}).sort({ createdAt: -1 });

    const newQuizResults = quizResults.map((quiz) => ({}));

    res.render("Result", { quizResults });
  } catch (err) {
    console.log(err);
    res.redirect("/Home");
  }
});

module.exports = router;
