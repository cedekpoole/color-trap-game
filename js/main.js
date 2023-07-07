// Start screen elements
const startButton = document.querySelector("#start")
const startScreen = document.querySelector("#start-screen")

// Question screen elements
const questionWrapper = document.querySelector("#questions")

startButton.addEventListener("click", () => {
    // hide start screen and show question screen when start button clicked
    startScreen.setAttribute("class", "hide");
    questionWrapper.removeAttribute("class")
})