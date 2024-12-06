const quizData = {
    "Easy": {
        "True or False": [
            { question: "Vincent van Gogh painted 'The Starry Night'.", answer: "True" },
            { question: "Leonardo da Vinci painted 'The Scream'.", answer: "False" },
            { question: "Claude Monet was known for his impressionist paintings.", answer: "True" },
            { question: "Michelangelo was a famous Renaissance painter and sculptor.", answer: "True" },
            { question: "Salvador Dalí was a realist painter.", answer: "False" },
            { question: "Pablo Picasso was known for his cubist paintings.", answer: "True" },
            { question: "Frida Kahlo is famous for her abstract art.", answer: "False" },
            { question: "Andy Warhol was a pop artist.", answer: "True" },
            { question: "Georgia O'Keeffe is known for her landscapes.", answer: "False" },
            { question: "Edvard Munch painted 'The Scream'.", answer: "True" }
        ],
        "Multiple Choice": [
            { question: "Who painted 'Mona Lisa'?", options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"], answer: "Leonardo da Vinci" },
            { question: "Which art movement is Claude Monet associated with?", options: ["Cubism", "Impressionism", "Surrealism", "Expressionism"], answer: "Impressionism" },
            { question: "What nationality was Vincent van Gogh?", options: ["French", "Dutch", "Italian", "Spanish"], answer: "Dutch" },
            { question: "In which country is the Louvre Museum located?", options: ["Italy", "France", "Netherlands", "Spain"], answer: "France" },
            { question: "Which artist is famous for painting 'The Starry Night'?", options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"], answer: "Vincent van Gogh" },
            { question: "Which artist is known for creating large-scale outdoor installations?", options: ["Christo and Jeanne-Claude", "Damien Hirst", "Banksy", "Jeff Koons"], answer: "Christo and Jeanne-Claude" },
            { question: "Which famous artist created the 'Birth of Venus'?", options: ["Sandro Botticelli", "Leonardo da Vinci", "Michelangelo", "Raphael"], answer: "Sandro Botticelli" },
            { question: "What is the primary style of art created by the artist Jackson Pollock?", options: ["Surrealism", "Abstract Expressionism", "Cubism", "Impressionism"], answer: "Abstract Expressionism" },
            { question: "Who is the artist behind the sculpture 'The Thinker'?", options: ["Auguste Rodin", "Henry Moore", "Pablo Picasso", "Antonio Canova"], answer: "Auguste Rodin" },
            { question: "What is the name of the painting featuring a girl with a pearl earring?", options: ["The Girl with a Pearl Earring", "The Scream", "The Last Supper", "The Night Watch"], answer: "The Girl with a Pearl Earring" }
        ]
    },
    "Medium": {
        "True or False": [
            { question: "Cubism was pioneered by Pablo Picasso and Georges Braque.", answer: "True" },
            { question: "The painting 'The Persistence of Memory' was created by Salvador Dalí.", answer: "True" },
            { question: "'The Night Watch' was painted by Rembrandt.", answer: "True" },
            { question: "Michelangelo painted the Sistine Chapel ceiling.", answer: "True" },
            { question: "Claude Monet painted 'The Persistence of Memory'.", answer: "False" },
            { question: "Impressionism started in the 19th century.", answer: "True" },
            { question: "Rembrandt was known for his use of light and shadow.", answer: "True" },
            { question: "Vincent van Gogh sold only one painting during his lifetime.", answer: "True" },
            { question: "The Mona Lisa was painted in the 17th century.", answer: "False" },
            { question: "The term 'Surrealism' is associated with dreams and the subconscious.", answer: "True" }
        ],
        "Multiple Choice": [
            { question: "Which artist is known for 'The Persistence of Memory'?", options: ["Pablo Picasso", "Salvador Dalí", "Claude Monet", "Vincent van Gogh"], answer: "Salvador Dalí" },
            { question: "In what year was 'The Starry Night' painted?", options: ["1889", "1890", "1895", "1901"], answer: "1889" },
            { question: "Which museum houses the painting 'The Night Watch'?", options: ["The Louvre", "The Prado", "The Rijksmuseum", "The Met"], answer: "The Rijksmuseum" },
            { question: "Who painted 'Girl with a Pearl Earring'?", options: ["Rembrandt", "Vermeer", "Picasso", "Matisse"], answer: "Vermeer" },
            { question: "Which artist is associated with the surrealist movement?", options: ["Vincent van Gogh", "Salvador Dalí", "Claude Monet", "Leonardo da Vinci"], answer: "Salvador Dalí" },
            { question: "Which artist is known for his colorful geometric paintings?", options: ["Piet Mondrian", "Wassily Kandinsky", "Henri Matisse", "Paul Klee"], answer: "Piet Mondrian" },
            { question: "Who painted 'The School of Athens'?", options: ["Raphael", "Michelangelo", "Da Vinci", "Caravaggio"], answer: "Raphael" },
            { question: "Which artist is known for their work in collage?", options: ["Pablo Picasso", "Henri Matisse", "Georgia O'Keeffe", "Paul Gauguin"], answer: "Pablo Picasso" },
            { question: "What is the name of the famous mural painted by Diego Rivera?", options: ["Man at the Crossroads", "The Last Supper", "The Creation of Adam", "Guernica"], answer: "Man at the Crossroads" },
            { question: "Who is known for painting the ceiling of the Sistine Chapel?", options: ["Raphael", "Michelangelo", "Botticelli", "Donatello"], answer: "Michelangelo" }
        ]
    },
    "Hard": {
        "True or False": [
            { question: "Jackson Pollock was an American abstract expressionist painter.", answer: "True" },
            { question: "The artist Piet Mondrian created abstract geometric art using primary colors.", answer: "True" },
            { question: "'Las Meninas' was painted by Diego Velázquez.", answer: "True" },
            { question: "Rembrandt was born in the 18th century.", answer: "False" },
            { question: "Andy Warhol's famous artwork 'Campbell’s Soup Cans' was created in the 1960s.", answer: "True" },
            { question: "Kandinsky is often considered the father of abstract art.", answer: "True" },
            { question: "The Art Deco movement began in the 20th century.", answer: "True" },
            { question: "The term 'Renaissance' refers to the period of European history after the Middle Ages.", answer: "True" },
            { question: "Cubism was developed after World War II.", answer: "False" },
            { question: "The artist Gustav Klimt is known for his golden artworks.", answer: "True" }
        ],
        "Multiple Choice": [
            { question: "Which artist painted 'Las Meninas'?", options: ["Goya", "Picasso", "Velázquez", "El Greco"], answer: "Velázquez" },
            { question: "What year was Picasso’s 'Guernica' painted?", options: ["1937", "1942", "1912", "1954"], answer: "1937" },
            { question: "Which artist is known for abstract expressionist 'drip' painting?", options: ["Salvador Dalí", "Jackson Pollock", "Andy Warhol", "Edvard Munch"], answer: "Jackson Pollock" },
            { question: "Where is Michelangelo's sculpture 'David' located?", options: ["Vatican Museums", "Uffizi Gallery", "Accademia Gallery", "Louvre Museum"], answer: "Accademia Gallery" },
            { question: "Which artist used the technique of pointillism?", options: ["Seurat", "Monet", "Gauguin", "Van Gogh"], answer: "Seurat" },
            { question: "Which modern artist is famous for his colorful balloon animals?", options: ["Jeff Koons", "Banksy", "Yayoi Kusama", "Takashi Murakami"], answer: "Jeff Koons" },
            { question: "What is the main subject of Grant Wood's 'American Gothic'?", options: ["Farmers", "Urban life", "War", "Nature"], answer: "Farmers" },
            { question: "Which artist created the large-scale installation 'The Gates'?", options: ["Christo and Jeanne-Claude", "Damien Hirst", "Yayoi Kusama", "Marina Abramović"], answer: "Christo and Jeanne-Claude" },
            { question: "What style of art is Henri Matisse known for?", options: ["Fauvism", "Cubism", "Surrealism", "Impressionism"], answer: "Fauvism" },
            { question: "Which artist is known for the series of paintings titled 'Water Lilies'?", options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Georgia O'Keeffe"], answer: "Claude Monet" }
        ]
    }
};


// Remaining functions like selectOption, startQuiz, displayQuestion, etc. remain the same.

let selectedOptions = { difficulty: null, type: null };
let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 30; // Timer for each question
let score = 0; // Score counter

function selectOption(category, option) {
    selectedOptions[category] = option;
    document.querySelectorAll('.choices .choice-button').forEach(button => {
        if (button.textContent === option) {
            button.classList.add('selected');
        } else if (button.closest('.choices').previousElementSibling.textContent === category) {
            button.classList.remove('selected');
        }
    });
    if (selectedOptions.difficulty && selectedOptions.type) {
        startQuiz();
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30; // Reset timer
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    displayQuestion();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
           document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

            timeLeft--;
        } else {
            clearInterval(timerInterval);
            alert("Time's up!");
            goToNextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    const { difficulty, type } = selectedOptions;
    const questions = quizData[difficulty][type];
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        const quizArea = document.getElementById('quiz-area');
        let questionHtml = `<h2>${questionData.question}</h2><p id="timer">Time left: ${timeLeft}s</p>`;

        if (type === "Multiple Choice") {
            questionHtml += '<div class="choices">';
            questionData.options.forEach(option => {
                questionHtml += `<button class="choice-button" onclick="selectAnswer('${option}')">${option}</button>`;
            });
            questionHtml += '</div>';
        } else if (type === "True or False") {
            questionHtml += '<div class="choices">';
            questionHtml += `<button class="choice-button" onclick="selectAnswer('True')">True</button>`;
            questionHtml += `<button class="choice-button" onclick="selectAnswer('False')">False</button>`;
            questionHtml += '</div>';
        }

        questionHtml += `
            <div class="navigation-buttons">
                <button class="navigation-button" onclick="goToPreviousQuestion()">Back</button>
                <button class="navigation-button" onclick="goToNextQuestion()">Next</button>
            </div>
        `;

        quizArea.innerHTML = questionHtml;
    } else {
        displayResult();
    }
}

function selectAnswer(selectedAnswer) {
    const { difficulty, type } = selectedOptions;
    const questions = quizData[difficulty][type];
    const correctAnswer = questions[currentQuestionIndex].answer || questions[currentQuestionIndex].answer;
    
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    goToNextQuestion();
}

function goToNextQuestion() {
    clearInterval(timerInterval); // Stop the timer
    currentQuestionIndex++;
    timeLeft = 30; // Reset timer
    displayQuestion();
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        timeLeft = 25; // Reset timer
        displayQuestion();
    }
}

function displayResult() {
    clearInterval(timerInterval);
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = `
        <h2>Your Score: ${score}</h2>
        <button class="navigation-button" onclick="restartQuiz()">Retake Quiz</button>
        <button class="navigation-button" onclick="goBackToSelection()">Go Back to Selection</button>
    `;
}

function restartQuiz() {
    selectedOptions = { difficulty: null, type: null };
    document.getElementById('quiz-area').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
}

function goBackToSelection() {
    document.getElementById('quiz-area').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    selectedOptions = { difficulty: null, type: null };
    document.querySelectorAll('.choices .choice-button').forEach(button => button.classList.remove('selected'));
}

function checkAnswer(selectedAnswer) {
    const { difficulty, type } = selectedOptions;
    const correctAnswer = quizData[difficulty][type][currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    goToNextQuestion();
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[selectedOptions.difficulty][selectedOptions.type].length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById('quiz-area').innerHTML = `
        <h2>Your Score: ${score}/${quizData[selectedOptions.difficulty][selectedOptions.type].length}</h2>
        <button class="navigation-button" onclick="restartQuiz()">Retry!</button>
        <button class="navigation-button" onclick="goBackToMenu()">Back to Selection</button>
    `;
}

function restartQuiz() {
    selectedOptions = { difficulty: null, type: null };
    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('quiz-area').style.display = 'none';
}

function goBackToMenu() {
    // Redirect to the quiz selection or main menu page
    window.location.href = "quiz.html"; // Adjust this to your main menu URL
}
