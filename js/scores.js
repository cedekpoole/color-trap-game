const scoreList = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// Clear local storage and refresh page when clear button is pressed
clearButton.addEventListener("click", () => {
  localStorage.removeItem("highscore");
  location.reload();
});

const showScores = () => {
  // get high scores from local storage
  const previousScores =
    JSON.parse(window.localStorage.getItem("highscore")) || [];

  // sort from highest to lowest
  previousScores.sort((num1, num2) => num2.score - num1.score);
  
  // show all scores on the highscore page
  for (let scores of previousScores) {
    const list = document.createElement("li");
    list.textContent = `${scores.name} - ${scores.score} seconds`;
    scoreList.appendChild(list);
  }
};

showScores();
