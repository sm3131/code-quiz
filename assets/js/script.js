// creating variables that target specific html elements
var startQuizEl = document.querySelector(".start");
var quizQuestionsEl = document.querySelector(".questions");
var quizQuestionsListEl = document.querySelector(".questions-list");
var accuracyEl = document.querySelector(".accuracy");
var finishQuizEl = document.querySelector(".finish");
var highScoreEl = document.querySelector(".highscore");
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

// initial quiz start intro screen element creation
function startQuiz() {
    var startH2El = document.createElement("h2");
    startH2El.textContent = "Code Quiz Challenge!";
    startQuizEl.appendChild(startH2El);

    var startPEl = document.createElement("p");
    startPEl.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate quia repudiandae nostrum quae sequi dolorum sunt. Ratione, dolorem, a doloribus ipsum quam quos nemo et incidunt nesciunt eveniet aperiam?";
    startQuizEl.appendChild(startPEl);

    var startBtnEl = document.createElement("button");
    startBtnEl.className = "startbtn";
    startBtnEl.textContent = "Start Quiz";
    startQuizEl.appendChild(startBtnEl);
    startBtnEl.addEventListener("click", beginQuiz);
}

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
    timeLeft = 5;
    var timer = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
        if (timeLeft <= 0) {
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
        console.log("I got here");
        endQuiz();
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
    // if (ansTargetEl.matches(".ans")) {
    //     checkAns();
    // }
    questionContentAddition();
}

// function to check if the answer is correct or incorrect
function checkAns() {
    if (answerEl === questions[indexCounter].correct) {
        var feedbackEl = document.createElement("h3");
        feedbackEl.className = "feedback-border"
        feedbackEl.textContent = "Correct!";
        totalScore = totalScore + 1

     } else {
        var feedbackEl = document.querySelector(".feedback");
        feedbackEl.className = "feedback-border"
        feedbackEl.textContent = "Incorrect!";
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

    initialsInputEl = document.createElement("input");
    initialsInputEl.type = "text";
    initialsInputEl.className = "initials";
    finishQuizEl.appendChild(initialsInputEl);

    initialsSubmitBtn = document.createElement("button");
    initialsSubmitBtn.type = "submit";
    initialsSubmitBtn.className = "submit-btn";
    initialsSubmitBtn.textContent = "Submit"
    finishQuizEl.appendChild(initialsSubmitBtn);

    //All Done!
    //Your final score is "score"
    //Text type input for initials submit button

}
