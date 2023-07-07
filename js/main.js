// Start screen elements
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const scores = document.querySelector(".scores");

// Question screen elements
const questionWrapper = document.querySelector("#questions");
const timer = document.querySelector(".timer");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");
const feedbackEl = document.querySelector("#feedback");
const timeEl = document.querySelector("#time");

let questionNumber = 0;
let q = questions[questionNumber];
let timeInSeconds = 40;

// create countdown for when game starts
const countdown = () => {
  let timeInterval = setInterval(function () {
    timeInSeconds--;
    timeEl.textContent = timeInSeconds;
    if (timeInSeconds <= 0 || questionNumber === questions.length) {
      clearInterval(timeInterval);
      // If the user reaches 0 seconds, it is the end of the quiz (they score a 0)
      if (timeInSeconds < 0) {
        timeInSeconds = 0;
      }
      // EndQuiz();
    }
  }, 1000);
};

// Create event listener for when start button is clicked
startButton.addEventListener("click", () => {
  // hide start screen and show question screen when start button clicked
  startScreen.setAttribute("class", "hide");
  questionWrapper.removeAttribute("class", "hide");
  timer.removeAttribute("class", "hide");
  scores.setAttribute("class", "hide");

  questionNumber = 0;
  renderQuestion();
  countdown();
});

const renderQuestion = () => {
  questionTitle.textContent = q.question.toUpperCase();
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
    feedbackEl.style.display = "block";

    if (userAnswer === questions[questionNumber].answer) {
      feedbackEl.textContent = "Correct Answer!";
      feedbackEl.style.color = "#C1D37F";
    } else {
      feedbackEl.textContent = "Wrong Answer!";
      feedbackEl.style.color = "#89023E";
      timeInSeconds -= 5;
    }
  }
  setTimeout(function () {
    feedbackEl.style.display = "none";
  }, 500);

  questionNumber++;
  q = questions[questionNumber];
  renderQuestion();
});
