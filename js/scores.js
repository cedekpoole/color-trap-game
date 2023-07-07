const userName = document.querySelector("#name");
const submitButton = document.querySelector("#submit");

const scoreList = document.querySelector("#highscores");
const clearButton = document.querySelector('#clear')

submitButton.addEventListener("click", (e) => {
  if (userName.value === "") {
    alert("Please enter your name!");
  } else {
    // check if there has been previous high scores in local storage
    const previousScores =
      JSON.parse(window.localStorage.getItem("highscore")) || [];
      // create object for user details 
      const userDetails = {
        score: timeInSeconds,
        name: userName.value
      }

      // add new user to local storage
      previousScores.push(userDetails)
      window.localStorage.setItem("highscore", JSON.stringify(previousScores))

      // when button is pressed, move user to highscores html page
      window.location.href = "highscores.html"
  }
});
// Clear local storage and refresh page when clear button is pressed
clearButton.addEventListener('click', () => {
    window.localStorage.removeItem("highscore");
    window.location.reload();
})

const showScores = () => {
    // get high scores from local storage
    const previousScores = JSON.parse(window.localStorage.getItem("highscores"));

    // sort from highest to lowest
    previousScores.sort((num1, num2) => num1.score - num2.score);

    for (let scores of previousScores) {
        const list = document.createElement("li")
        
    }
}


