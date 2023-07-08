const userName = document.querySelector("#name");
const submitButton = document.querySelector("#submit");

const scoreList = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// submitButton.addEventListener("click", () => {
//   if (userName.value === "") {
//     alert("Please enter your name!");
//   } else {
//     // check if there has been previous high scores in local storage
//     const previousScores = JSON.parse(localStorage.getItem("highscore")) || [];
//     // create object for user details
//     const userDetails = {
//       score: timeInSeconds,
//       name: userName.value,
//     };

//     // add new user to local storage
//     previousScores.push(userDetails);
//     localStorage.setItem("highscore", JSON.stringify(previousScores));

//     // when button is pressed, move user to highscores html page
//     location.href = "highscores.html";
//   }
// });
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

  for (let scores of previousScores) {
    const list = document.createElement("li");
    list.textContent = `${scores.name} - ${scores.score} seconds`;
    scoreList.appendChild(list);
  }
};

showScores()

