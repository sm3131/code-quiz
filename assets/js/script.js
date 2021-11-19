// creating variables that target specific html elements
var startQuizEl = document.querySelector(".start");
var quizQuestionsEl = document.querySelector(".questions");
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
    //questionElCreator();

    
    // Call Question creator function
    // Call Question Elements creator
    // Call Element content addition
}

function timeStart() {
    var timeLeft = 120;
    var timer = setInterval(function() {
                timerEl.textContent = "Time: " + timeLeft;
                timeLeft--;
                if (timeLeft === -1) {
                    clearInterval(timer);
                }
    }, 1000);
}



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