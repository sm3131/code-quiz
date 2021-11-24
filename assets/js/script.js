// creating variables that target specific html elements
var startQuizEl = document.querySelector(".start");
var quizQuestionsEl = document.querySelector(".questions");
var quizQuestionsListEl = document.querySelector(".questions-list");
var accuracyEl = document.querySelector(".accuracy");
var finishQuizEl = document.querySelector(".finish");
var highScoreEl = document.querySelector(".highscore");
var timerEl = document.querySelector("#timer");

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

// initial start quiz element creation
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

}
// function to start quiz timer
function timeStart() {
    timeLeft = 120;
    var timer = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
        if (timeLeft === -1) {
            clearInterval(timer);
        }
    }, 1000);
}

// function to create question elements
function questionElCreator() {

    questionEl = document.createElement("h2");
    quizQuestionsListEl.appendChild(questionEl);

    answer1El = document.createElement("li");
    answer1El.className = "ans1";
    quizQuestionsListEl.appendChild(answer1El);

    answer2El = document.createElement("li");
    answer2El.className = "ans2";
    quizQuestionsListEl.appendChild(answer2El);

    answer3El = document.createElement("li");
    answer3El.className = "ans3";
    quizQuestionsListEl.appendChild(answer3El);

    answer4El = document.createElement("li");
    answer4El.className = "ans4";
    quizQuestionsListEl.appendChild(answer4El);

    indexCounter = 0;
    questionContentAddition();
}

function questionContentAddition() {
    while (indexCounter < 2 && timeLeft > 0) {

    questionEl.textContent = questions[indexCounter].ask;
    answer1El.textContent = questions[indexCounter].answer1;
    answer2El.textContent = questions[indexCounter].answer2;
    answer3El.textContent = questions[indexCounter].answer3;
    answer4El.textContent = questions[indexCounter].answer4;

    break;
    }
    quizQuestionsListEl.addEventListener("click", answerSelector);
};


function answerSelector(event) {

        ansTargetEl = event.target;
        if (ansTargetEl.matches(".ans1")) {
            checkAns1();
        } else if (ansTargetEl.matches(".ans2")) {
            checkAns2();
        } else if (ansTargetEl.matches(".ans3")) {
            checkAns3();
        } else if (ansTargetEl.matches(".ans4")) {
            checkAns4();
        }
        questionContentAddition();
    };

function checkAns1() {
    if (questions[indexCounter].answer1 === questions[indexCounter].correct) {
        var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Correct!";
        console.log("correct")
    } else {
        var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Incorrect!";
        console.log("incorrect")
    }
    indexCounter++;
}

function checkAns2() {
    if (questions[indexCounter].answer2 === questions[indexCounter].correct) {
         var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Correct!";
        console.log("correct")
    } else {
        var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Incorrect!";
        console.log("incorrect")
    }
    indexCounter++;
}

function checkAns3() {
    if (questions[indexCounter].answer3 === questions[indexCounter].correct) {
         var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Correct!";
        console.log("correct")
    } else {
        var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Incorrect!";
        console.log("incorrect")
    }
    indexCounter++;}

function checkAns4() {
    if (questions[indexCounter].answer4 === questions[indexCounter].correct) {
         var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Correct!";
        console.log("correct")
    } else {
        var feedbackEl = document.querySelector(".feedback");
        feedbackEl.textContent = "Incorrect!";
        console.log("incorrect")
    }
    indexCounter++;
}

