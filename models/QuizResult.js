const mongoose = require("mongoose");

// Define the schema
const quizResultSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const QuizResult = mongoose.model("QuizResult", quizResultSchema);

// Export the model
module.exports = QuizResult;
