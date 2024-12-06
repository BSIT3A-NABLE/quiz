const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static("public"));

// Endpoint to fetch trivia questions
app.post("/fetch_questions", async (req, res) => {
  const { amount, difficulty, quizType } = req.body;

  try {
    const response = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount,
        difficulty,
        type: quizType === "multiple" ? "multiple" : "boolean", // Use 'multiple' or 'boolean'
      },
    });

    // Sending back questions
    res.json({ questions: response.data.results });
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
