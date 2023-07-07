// Start screen elements
const startButton = document.querySelector("#start")
const startScreen = document.querySelector("#start-screen")

// Question screen elements
const questionWrapper = document.querySelector("#questions")
const timer = document.querySelector(".timer")
const scores = document.querySelector(".scores")


startButton.addEventListener("click", () => {
    // hide start screen and show question screen when start button clicked
    startScreen.setAttribute("class", "hide");
    questionWrapper.removeAttribute("class", "hide")
    timer.removeAttribute("class", "hide")
    scores.setAttribute("class", "hide")
})