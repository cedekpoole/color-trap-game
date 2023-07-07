// Start screen elements
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const scores = document.querySelector(".scores");

// Question screen elements
const questionWrapper = document.querySelector("#questions");
const timer = document.querySelector(".timer");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices")

let questionNumber = 0;
let q = questions[questionNumber];

// Create event listener for when start button is clicked
startButton.addEventListener("click", () => {
    // hide start screen and show question screen when start button clicked
    startScreen.setAttribute("class", "hide");
    questionWrapper.removeAttribute("class", "hide");
    timer.removeAttribute("class", "hide");
    scores.setAttribute("class", "hide");

    questionNumber = 0;
    renderQuestion();
})

const renderQuestion = () => {
    questionTitle.textContent = q.question
    questionTitle.style.color = q.color

    let answerOptions = "";
    for (const option in q.options) {
        answerOptions += `<button>${q.options[option]}</button>`
    }
    choicesEl.innerHTML = answerOptions;
}

