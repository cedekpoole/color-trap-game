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

// End screen elements
const endScreenEl = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const endTitle = document.querySelector("#end-title");

const userName = document.querySelector("#name");
const submitButton = document.querySelector("#submit");

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
      EndQuiz();
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

// Render questions when start button is clicked
const renderQuestion = () => {
  questionTitle.textContent = q.question.toUpperCase();
  questionTitle.style.color = q.color;

  let answerOptions = "";
  for (const option in q.options) {
    answerOptions += `<button>${q.options[option]}</button>`;
  }
  choicesEl.innerHTML = answerOptions;
};

// If the user picks the right or wrong answer, provide feedback
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
  // only display feedback for half a second
  setTimeout(function () {
    feedbackEl.style.display = "none";
  }, 500);

  // go to the next question
  questionNumber++;
  q = questions[questionNumber];
  renderQuestion();
});

// create function that executes when quiz has ended
const EndQuiz = () => {
  // show the end screen
  endScreenEl.removeAttribute("class");
  feedbackEl.textContent = "";
  // remove timer content
  timeEl.textContent = "";
  // hide question container
  questionWrapper.classList = "hide";
  // When the user completes all questions, the remaining time becomes their score
  finalScore.textContent = timeInSeconds;

  // use a tertiary operator for the end screen title text
  timeInSeconds > 10
    ? (endTitle.textContent = "Well done - you smashed it!")
    : (endTitle.textContent = "Oof - better luck next time!");
};

submitButton.addEventListener("click", () => {
  if (userName.value === "") {
    alert("Please enter your name!");
  } else {
    // check if there has been previous high scores in local storage
    const previousScores = JSON.parse(localStorage.getItem("highscore")) || [];
    // create object for user details
    const userDetails = {
      score: timeInSeconds,
      name: userName.value,
    };

    // add new user to local storage
    previousScores.push(userDetails);
    localStorage.setItem("highscore", JSON.stringify(previousScores));

    // when button is pressed, move user to highscores html page
    location.href = "highscores.html";
  }
});