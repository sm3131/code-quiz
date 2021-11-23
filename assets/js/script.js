// creating variables that target specific html elements
var startQuizEl = document.querySelector(".start");
// var questionsGroup = document.querySelector(".questions-div");
var quizQuestionsEl = document.querySelector(".questions");
var quizQuestionsListEl = document.querySelector(".questions-list");
var accuracyEl = document.querySelector(".accuracy");
var finishQuizEl = document.querySelector(".finish");
var highScoreEl = document.querySelector(".highscore");
var timerEl = document.querySelector("#timer");

startQuiz();

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

function beginQuiz() {
    startQuizEl.textContent = "";
    // Start Timer
    timeStart();
    // create question elements
    questionElCreator();


    // Call Question creator function
    // Call Question Elements creator
    // Call Element content addition
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
    //questionEl.textContent = test[i].ask
    quizQuestionsEl.appendChild(questionEl);

    answer1El = document.createElement("li");
    //answer1El.textContent = test[i].answer1;
    answer1El.className = "ans1";
    quizQuestionsListEl.appendChild(answer1El);

    answer2El = document.createElement("li");
    // answer2El.textContent = test[i].answer2;
    answer2El.className = "ans2";
    quizQuestionsListEl.appendChild(answer2El);

    answer3El = document.createElement("li");
    //answer3El.textContent = test[i].answer3
    answer3El.className = "ans3";
    quizQuestionsListEl.appendChild(answer3El);

    answer4El = document.createElement("li");
    //answer4El.textContent = test[i].answer4
    answer4El.className = "ans4";
    quizQuestionsListEl.appendChild(answer4El);

    
    questionContentAddition();
}


    function questionContentAddition() {
    for (var i = 0; i < 2; i++) {
        globalI = i;
        if (timeLeft === 0) {
            break;
        } else {
            questionEl.textContent = test[i].ask
            answer1El.textContent = test[i].answer1;
            answer2El.textContent = test[i].answer2;
            answer3El.textContent = test[i].answer3;
            answer4El.textContent = test[i].answer4;
        }
        
        quizQuestionsListEl.addEventListener("click", function (event) {
            // debugger;
            targetEl = event.target;
            if (targetEl.matches(".ans1")) {
                checkAns1();
            } else if (targetEl.matches(".ans2")) {
                checkAns2();
            } else if (targetEl.matches(".ans3")) {
                checkAns3();
            } else if (targetEl.matches(".ans4")) {
                checkAns4();
            }
            quizQuestionsEl.textContent = "";
            quizQuestionsListEl.textContent = "";
        });
    }
};


function checkAns1() {
    quizQuestionsEl.textContent = "";
    quizQuestionsListEl.textContent = "";
    if (test[globalI].answer1 === test[globalI].correct) {
        var correctEl = document.createElement("h3");
        correctEl.textContent = "Correct!";
        accuracyEl.appendChild(correctEl);
        console.log("correct")
    } else {
        var incorrectEl = document.createElement("h3");
        incorrectEl.textContent = "Incorrect!";
        accuracyEl.appendChild(incorrectEl);
        console.log("incorrect")
    }
}

function checkAns2() {
    if (test[globalI].answer2 === test[globalI].correct) {
        var correctEl = document.createElement("h3");
        correctEl.textContent = "Correct!";
        accuracyEl.appendChild(correctEl);
        console.log("correct")
    } else {
        var incorrectEl = document.createElement("h3");
        incorrectEl.textContent = "Incorrect!";
        accuracyEl.appendChild(incorrectEl);
        console.log("incorrect")
    }
}

function checkAns3() {
    if (test[globalI].answer3 === test[globalI].correct) {
        var correctEl = document.createElement("h3");
        correctEl.textContent = "Correct!";
        accuracyEl.appendChild(correctEl);
        console.log("correct")
    } else {
        var incorrectEl = document.createElement("h3");
        incorrectEl.textContent = "Incorrect!";
        accuracyEl.appendChild(incorrectEl);
        console.log("incorrect")
    }
}

function checkAns4() {
    if (test[globalI].answer4 === test[globalI].correct) {
        var correctEl = document.createElement("h3");
        correctEl.textContent = "Correct!";
        accuracyEl.appendChild(correctEl);
        console.log("correct")
    } else {
        var incorrectEl = document.createElement("h3");
        incorrectEl.textContent = "Incorrect!";
        accuracyEl.appendChild(incorrectEl);
        console.log("incorrect")
    }
}


var test = [
    {
        "ask": "Question1",
        "answer1": "Q1Answer1",
        "answer2": "Q1Answer2",
        "answer3": "Q1Answer3",
        "answer4": "Q1Answer4",
        "correct": "Q1Answer1"
    },
    {
        "ask": "Question2",
        "answer1": "Q2Answer1",
        "answer2": "Q2Answer2",
        "answer3": "Q2Answer3",
        "answer4": "Q2Answer4",
        "correct": "Q2Answer2"
    }
];


// check button if/else:
// if (button clicked) {
//     run check answer function
//     next question function
// } else {
//     check timer function
//     If (timer <= 0) { run finish quiz function}
//     else { run button listener function above}

// Create Question Element Creator function
/* <h2 class="ask">Question</h2>
<ol type="A">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ol>
<h3 class="feedback">Correct</h3> */

// Create Question Function


// Create Finish Section Elements
// <h3></h3>
// <p></p>
// <input>
// <button></button> 

// Finish Section Functions

// Create HighScore Section Elements
// <h3></h3>
// <p></p>
// <button></button>
// <button></button> 

//Create highscore storing function