// creating variables that target specific html elements
var startQuizEl = document.querySelector(".start");
var quizQuestionsEl = document.querySelector(".questions");
var quizQuestionsListEl = document.querySelector(".questions-list");
var accuracyEl = document.querySelector(".accuracy");
var finishQuizEl = document.querySelector(".finish");
var highScoreEl = document.querySelector(".highscore");
var highScoreBtns = document.querySelector(".highscore-btns");
var timerEl = document.querySelector("#timer");

var totalScore = 0;

var questions = [
    {
    "ask": "Question1",
    "answer1": "Correct1",
    "answer2": "Wrong2",
    "answer3": "Wrong3",
    "answer4": "Wrong4",
    "correct": "Correct1"
},
{
    "ask": "Question2",
    "answer1": "Wrong1",
    "answer2": "Correct2",
    "answer3": "Wrong3",
    "answer4": "Wrong4",
    "correct": "Correct2"
}
];

// initial quiz start intro screen elements creation
function startQuiz() {
    var startH2El = document.createElement("h2");
    startH2El.textContent = "Code Quiz Challenge!";
    startQuizEl.appendChild(startH2El);

    var startPEl = document.createElement("p");
    startPEl.innerHTML = "Welcome to the code quiz challenge! The rules for this quiz are simple, you will have 5 minutes to answer 10 multiple choice questions about the javascript programming language. If you answer a question correct you will earn one point, if you answer a question incorrectly, 5 seconds will be subtracted from your time. The quiz will end when you either finish answering every question or when your time runs out. <br><br> At the end of the quiz you will be prompted to enter your initials and submit your score. Once you have done that, the final section of the quiz will display the initials and score of the person who has the current high score. From this final section you can either return to the start of the quiz by pressing the 'Go Back' button, or you can clear the high score by pressing the 'Clear High Score' button.<br><br> Challenge yourself and your friends to get the highest score you can on the quiz. You can retake the quiz as many times as you would like in order to try and get the highest score possible! You will not be provided with the question answers after you finish the quiz, so use your knowledge and resources to find the correct answers. Press the 'Start Quiz' button to begin the quiz, your time will start right away. Good Luck!";
    startQuizEl.appendChild(startPEl);

    var startBtnEl = document.createElement("button");
    startBtnEl.className = "startbtn";
    startBtnEl.textContent = "Start Quiz";
    startQuizEl.appendChild(startBtnEl);

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

}
// function to start quiz timer
function timeStart() {
    timeLeft = 10;
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
    if(indexCounter > len) {
        timeLeft = -1;
    }
    quizQuestionsListEl.addEventListener("click", answerSelector);
    
};

// function to target the answer option that was clicked
function answerSelector(event) {
    ansTargetEl = event.target;
    answerEl = ansTargetEl.textContent
    console.log(answerEl);
    console.log(ansTargetEl);
    checkAns();
    
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

    initialsSubmitBtn.addEventListener("click", saveScore);

}

// save score to local storage

function saveScore () {

    //Make sure can't submit until user enters some text in initials box!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var initials = initialsInputEl.value
    console.log(initials);

    finalScore = Number(localStorage.getItem("score"));
    finalInitials = localStorage.getItem("initials");

    if (totalScore >= finalScore) {
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", totalScore);
    }

    showHighScore();
}

function showHighScore() {

    finishQuizEl.textContent = "";
    initialsSectionEl.textContent = "";

    finalScoreHS = Number(localStorage.getItem("score"));
    finalInitialsHS = localStorage.getItem("initials");

    highScoreHeadingEl = document.createElement("h2");
    highScoreHeadingEl.textContent = "High Score:";
    highScoreHeadingEl.className = "hs-head";
    highScoreEl.appendChild(highScoreHeadingEl);

    highScoreInputEl = document.createElement("p");
    highScoreInputEl.textContent = finalInitialsHS + ": " + finalScoreHS;
    highScoreInputEl.className = "hs-final";
    highScoreEl.appendChild(highScoreInputEl);

    goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Go Back";
    goBackBtn.className = "go-back-btn";
    highScoreBtns.appendChild(goBackBtn);
    goBackBtn.addEventListener("click", reloadQuiz);

    clearHighScoresBtn = document.createElement("button");
    clearHighScoresBtn.textContent = "Clear High Score";
    clearHighScoresBtn.className = "clear-scores-btn";
    highScoreBtns.appendChild(clearHighScoresBtn);
    clearHighScoresBtn.addEventListener("click", function(){
        highScoreInputEl.textContent = "";
    })
}

function reloadQuiz() {
    location.reload();
}

// view high scores when click the upper left link