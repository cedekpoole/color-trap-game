// Start screen elements
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const scores = document.querySelector(".scores");

// Question screen elements
const questionWrapper = document.querySelector("#questions");
const timer = document.querySelector(".timer");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");
const feedbackEl = document.querySelector('#feedback')
let questionNumber = 0;
let q = questions[questionNumber];
let timeInSeconds = 30;

// Create event listener for when start button is clicked
startButton.addEventListener("click", () => {
  // hide start screen and show question screen when start button clicked
  startScreen.setAttribute("class", "hide");
  questionWrapper.removeAttribute("class", "hide");
  timer.removeAttribute("class", "hide");
  scores.setAttribute("class", "hide");

  questionNumber = 0;
  renderQuestion();
});

const renderQuestion = () => {
  questionTitle.textContent = q.question;
  questionTitle.style.color = q.color;

  let answerOptions = "";
  for (const option in q.options) {
    answerOptions += `<button>${q.options[option]}</button>`;
  }
  choicesEl.innerHTML = answerOptions;
};

choicesEl.addEventListener("click", (e) => {
  let userAnswer = e.target.textContent;
  if (timeInSeconds > 0 && questionNumber < questions.length) {
    feedbackEl.style.display = "block"

    if (userAnswer === questions[questionNumber].answer) {
      feedbackEl.textContent = "Correct Answer!";
      feedbackEl.style.color = "#C1D37F";
    } else {
      feedbackEl.textContent = "Wrong Answer!";
      feedbackEl.style.color = "#89023E";
      timeLeft -= 5;
    }
  }
  setTimeout(function () {
    feedbackEl.style.display = "none";
  }, 750);

  questionNumber++;
  q = questions[questionNumber]
  renderQuestion();
});
