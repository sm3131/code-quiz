// creating variables that target specific html elements
var startQuizEl = document.querySelector(".start");
var quizQuestionsEl = document.querySelector(".questions");
var finishQuizEl = document.querySelector(".finish");
var highScoreEl = document.querySelector(".highscore");

startQuiz();

// initial start quiz element creation
function startQuiz() {
        var startH2El = document.createElement("h2");
        startH2El.className = "title"
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
    // Call Question creator function
    // Call Question Elements creator
    // Call Element content addition
}


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