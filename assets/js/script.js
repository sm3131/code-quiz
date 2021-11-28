// creating variables that target specific html elements
var startQuizEl = document.querySelector(".start");
var quizQuestionsEl = document.querySelector(".questions");
var quizQuestionsListEl = document.querySelector(".questions-list");
var accuracyEl = document.querySelector(".accuracy");
var finishQuizEl = document.querySelector(".finish");
var highScoreEl = document.querySelector(".highscore");
var highScoreBtns = document.querySelector(".highscore-btns");
var timerEl = document.querySelector("#timer");
var viewHighScoreEl = document.querySelector(".score-click");
var topScoreEl = document.querySelector(".top-score");
var totalScore = 0;

// quiz questions array of objects
var questions = [
    {
        "ask": "What does the console.log() method do?",
        "answer1": "Outputs a message in a window prompt",
        "answer2": "Outputs a message in an alert box",
        "answer3": "Outputs a message to the web console",
        "answer4": "Locally stores objects",
        "correct": "Outputs a message to the web console"
    },
    {
        "ask": "What would the following variable evaluate to: var x = 10 + 5 + “number”;?",
        "answer1": "105number",
        "answer2": "15number",
        "answer3": "number15",
        "answer4": "number105",
        "correct": "15number"
    },
    {
        "ask": "Which of the following correctly creates an object?",
        "answer1": "var car = {'make': 'Subaru'; 'model': 'Crosstrek'; 'year': '2021'; 'color': 'blue'};",
        "answer2": "var car = {make: Subaru, model: Crosstrek, year: 2021, color: blue};",
        "answer3": "var car = [make: Subaru, model: Crosstrek, year: 2021, color: blue];",
        "answer4": "var car = {'make': 'Subaru', 'model': 'Crosstrek', 'year': '2021', 'color': 'blue'};",
        "correct": "var car = {'make': 'Subaru', 'model': 'Crosstrek', 'year': '2021', 'color': 'blue'};"
    },
    {
        "ask": "What is the correct way to write a JavaScript array?",
        "answer1": "var colors = ['red', 'green', 'blue']",
        "answer2": "var colors = (1:'red', 2:'green', 3:'blue')",
        "answer3": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "answer4": "var colors = 'red', 'green', 'blue'",
        "correct": "var colors = ['red', 'green', 'blue']"
    },
    {
        "ask": "What is the correct JavaScript syntax to change the content of the following HTML element? <p id='demo'>This is a  demonstration.</p>",
        "answer1": "document.getElement('p').innerHTML = 'Hello World!';",
        "answer2": "document.getElementById('demo').innerHTML = 'Hello World!';",
        "answer3": "#demo.innerHTML = 'Hello World!';",
        "answer4": "document.getElementByName('p').innerHTML = 'Hello World!';",
        "correct": "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        "ask": "From the given array which index is the letter ‘C’ on? [‘A’, ‘B’, ‘C’, ‘D’]",
        "answer1": "3",
        "answer2": "0",
        "answer3": "2",
        "answer4": "1",
        "correct": "2"
    },
    {
        "ask": "How do you call a function in Javascript?",
        "answer1": "call myFunction ();",
        "answer2": "myFunction {}",
        "answer3": "function myFunction()",
        "answer4": "myFunction();",
        "correct": "myFunction();"
    },
    {
        "ask": "Which of the following correctly selects an element from the DOM using its class name?",
        "answer1": "document.querySelector(#myElement)",
        "answer2": "document.querySelector('myElement')",
        "answer3": "document.querySelector('.myElement')",
        "answer4": "document.querySelector('#myElement;)",
        "correct": "document.querySelector('.myElement')"
    },
    {
        "ask": "When will myFunction occur based on the following code: element.addEventListener('click', myFunction);",
        "answer1": "Right when the program loads",
        "answer2": "When the user clicks on the element",
        "answer3": "When myFunction is called",
        "answer4": "When the user double clicks on the element",
        "correct": "When the user clicks on the element"
    },
    {
        "ask": "What does the appendChild() method accomplish?",
        "answer1": "appends a parent element to a child element",
        "answer2": "appends an element/node as the last child of a parent node",
        "answer3": "appends two child elements/nodes together",
        "answer4": "appends an element/node as the first child of a parent node",
        "correct": "appends an element/node as the last child of a parent node"
    },
]

// highscores array for storing in local storage
var highScoresArr = [];

viewHighScoreEl.addEventListener("click", displayTop);

function displayTop() {
    
    topScores = localStorage.getItem("highscores");
    if(!topScores) {
        return false;
    } else {
    topScores = JSON.parse(topScores);
    }
    allTopScores = [];
    highest = -1;
    for (var i = 0; i < topScores.length; i++) {
        allTopScores.push(topScores[i].finalScore);

        if (allTopScores[i] > highest) {
            highestTopScoreId = i;
            highest = allTopScores[i];
            displayTopInitials = topScores[highestTopScoreId].initials;
            displayTopScore = topScores[highestTopScoreId].finalScore;
        }
    }
    topScoreEl.className = "top-1"
    topScoreEl.textContent = displayTopInitials + ": " + displayTopScore;
};

// initial quiz start intro screen elements creation
function startQuiz() {
    var startH2El = document.createElement("h2");
    startH2El.textContent = "Code Quiz Challenge!";
    startQuizEl.appendChild(startH2El);

    var startPEl = document.createElement("p");
    startPEl.innerHTML = "Welcome to the code quiz challenge! The rules for this quiz are simple, you will have 2 minutes to answer 10 multiple choice questions about the javascript programming language. If you answer a question correct you will earn one point, if you answer a question incorrectly, 5 seconds will be subtracted from your time. The quiz will end when you either finish answering every question or when your time runs out. <br><br> At the end of the quiz you will be prompted to enter your initials and submit your score. Once you have done that, the final section of the quiz will display the initials and score of the person who has the current high score. From this final section you can either return to the start of the quiz by pressing the 'Play Again' button, or you can clear all high scores by pressing the 'Clear High Scores' button.<br><br> Challenge yourself and your friends to get the highest score you can on the quiz. You can retake the quiz as many times as you would like in order to try and get the highest score possible! You will not be provided with the question answers after you finish the quiz, so use your knowledge and resources to find the correct answers. Press the 'Start Quiz' button to begin the quiz, your time will start right away. Good Luck!";
    startQuizEl.appendChild(startPEl);

    var startBtnEl = document.createElement("button");
    startBtnEl.className = "startbtn";
    startBtnEl.textContent = "Start Quiz";
    startQuizEl.appendChild(startBtnEl);


    loadHighScores();

    //load highscores from local storage
    function loadHighScores() {
        var savedScores = localStorage.getItem("highscores");

        if (!savedScores) {
            return false;
        }
        savedScores = JSON.parse(savedScores);

        highScoresArr = savedScores;
    }
    startBtnEl.addEventListener("click", beginQuiz);
}

// Begin code quiz
startQuiz();

function beginQuiz() {
    startQuizEl.textContent = "";
    // Start Timer
    timeStart();
    // create question elements
    questionElCreator();
    //add question content
    questionContentAddition();
    //listening for click event on question answers list
    quizQuestionsListEl.addEventListener("click", answerSelector);
}

// function to start and clear quiz timer
function timeStart() {
    timeLeft = 120;
    var timer = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
        if (timeLeft <= -1) {
            clearInterval(timer);
            timerEl.textContent = "Time: 0";
            endQuiz();
        }
    }, 1000);
}

// function to create question elements
function questionElCreator() {

    questionEl = document.createElement("h2");
    questionEl.className = "ans-heading";
    quizQuestionsListEl.appendChild(questionEl);

    answer1El = document.createElement("li");
    answer1El.classList.add("ans1", "ans");
    quizQuestionsListEl.appendChild(answer1El);

    answer2El = document.createElement("li");
    answer2El.classList.add("ans2", "ans");
    quizQuestionsListEl.appendChild(answer2El);

    answer3El = document.createElement("li");
    answer3El.classList.add("ans3", "ans");
    quizQuestionsListEl.appendChild(answer3El);

    answer4El = document.createElement("li");
    answer4El.classList.add("ans4", "ans");
    quizQuestionsListEl.appendChild(answer4El);

    indexCounter = 0;
}

// function to add content to the question elements
function questionContentAddition() {
    len = questions.length - 1

    while (indexCounter <= len && timeLeft > 0) {

        questionEl.textContent = questions[indexCounter].ask;
        answer1El.textContent = questions[indexCounter].answer1;
        answer2El.textContent = questions[indexCounter].answer2;
        answer3El.textContent = questions[indexCounter].answer3;
        answer4El.textContent = questions[indexCounter].answer4;

        break;
    }
    if (indexCounter > len) {
        timeLeft = -1;
    }
};

// function to target the answer option that was clicked
function answerSelector(event) {
    
    if(event.target.matches(".ans")) {
        ansTargetEl = event.target;
        answerEl = ansTargetEl.textContent
        checkAns();
    }
    
    questionContentAddition();
}

// function to check if the answer is correct or incorrect
function checkAns() {
    if (answerEl === questions[indexCounter].correct) {
        accuracyEl.textContent = "";
        var feedbackEl = document.createElement("h3");
        feedbackEl.className = "feedback-border"
        feedbackEl.textContent = "Correct!";
        accuracyEl.appendChild(feedbackEl);
        totalScore = totalScore + 1

    } else {
        accuracyEl.textContent = "";
        var feedbackEl = document.createElement("h3");
        feedbackEl.className = "feedback-border"
        feedbackEl.textContent = "Incorrect!";
        accuracyEl.appendChild(feedbackEl);
        timeLeft = timeLeft - 5;
    }
    indexCounter++;
}

// function to end the quiz
function endQuiz() {

    quizQuestionsEl.textContent = "";
    accuracyEl.textContent = "";

    endHeaderEl = document.createElement("h2");
    endHeaderEl.textContent = "All Done!";
    endHeaderEl.className = "end-header";
    finishQuizEl.appendChild(endHeaderEl);

    finalScoreEl = document.createElement("p");
    finalScoreEl.textContent = "Your final score is " + totalScore + ".";
    finalScoreEl.className = "final-score";
    finishQuizEl.appendChild(finalScoreEl);

    initialsSectionEl = document.createElement("div");
    finishQuizEl.appendChild(initialsSectionEl);
    initialsPromptEl = document.createElement("p");
    initialsPromptEl.textContent = "Please enter your initials:";
    initialsSectionEl.appendChild(initialsPromptEl);
    initialsInputEl = document.createElement("input");
    initialsInputEl.type = "text";
    initialsInputEl.name = "name"
    initialsInputEl.className = "initials";
    initialsSectionEl.appendChild(initialsInputEl);

    initialsSubmitBtn = document.createElement("button");
    initialsSubmitBtn.type = "submit";
    initialsSubmitBtn.className = "submit-btn";
    initialsSubmitBtn.textContent = "Submit"
    initialsSectionEl.appendChild(initialsSubmitBtn);


    initialsSubmitBtn.addEventListener("click", checkInitials);
}

function checkInitials() {
    if (!(initialsInputEl.value.length >= 1 && initialsInputEl.value.length <= 3)) {
        alert("Please enter an initial length between 1 and 3 characters");
        finishQuizEl.textContent = "";
        initialsSectionEl.textContent = "";
        endQuiz();
    } else {
        saveScore();
    }
}


// save score to local storage
function saveScore() {

    // create highscore information object 
    var highScoreInfo = {
        "initials": initialsInputEl.value,
        "finalScore": totalScore
    };

    // add highscore object info to the highscores array
    highScoresArr.push(highScoreInfo);

    // store scores in local storage
    localStorage.setItem("highscores", JSON.stringify(highScoresArr));

    showHighScore();
}

// function to acquire and display highest score on the final page of the quiz
function showHighScore() {

    finishQuizEl.textContent = "";
    initialsSectionEl.textContent = "";

    var savedScores = localStorage.getItem("highscores");

    if (!savedScores) {
        return false;
    }
    savedScores = JSON.parse(savedScores);

    allScores = [];
    highest = -1;
    for (var i = 0; i < savedScores.length; i++) {
        allScores.push(savedScores[i].finalScore);

        if (allScores[i] > highest) {
            highestScoreId = i;
            highest = allScores[i];
            displayInitials = savedScores[highestScoreId].initials;
            displayScore = savedScores[highestScoreId].finalScore;
        }
    }

    // creating final section of quiz to display high score and create buttons to play again and clear scores
    highScoreHeadingEl = document.createElement("h2");
    highScoreHeadingEl.textContent = "High Score:";
    highScoreHeadingEl.className = "hs-head";
    highScoreEl.appendChild(highScoreHeadingEl);

    highScoreInputEl = document.createElement("p");
    highScoreInputEl.textContent = displayInitials + ": " + displayScore;
    highScoreInputEl.className = "hs-final";
    highScoreEl.appendChild(highScoreInputEl);

    goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Play Again";
    goBackBtn.className = "play-again-btn";
    highScoreBtns.appendChild(goBackBtn);
    goBackBtn.addEventListener("click", reloadQuiz);

    clearHighScoresBtn = document.createElement("button");
    clearHighScoresBtn.textContent = "Clear High Scores";
    clearHighScoresBtn.className = "clear-scores-btn";
    highScoreBtns.appendChild(clearHighScoresBtn);
    clearHighScoresBtn.addEventListener("click", function () {
        highScoreInputEl.textContent = "";
        localStorage.clear();
    })
}

// function to reload quiz when play again button is clicked
function reloadQuiz() {
    location.reload();
}



////////TO-DOS/////////////////

// Make all initials display uppercase even if entered lowercase

// view high scores when click the upper left link

// Final styling:
// make correct and incorrect change colors or be more noticeable question to question
// change font sizes of questions
// make sure semi responsive

// Add README.md