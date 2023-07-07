const initials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
  if (initials.value === "") {
    alert("Please enter your initials!");
  } else {
    // check if there has been previous high scores in local storage
    const previousScores =
      JSON.parse(window.localStorage.getItem("highscore")) || [];
      // create object for user details 
      const userDetails = {
        score: timeInSeconds,
        name: initials.value
      }

      // add new user to local storage
      previousScores.push(userDetails)
      window.localStorage.setItem("highscore", JSON.stringify(previousScores))

      // when button is pressed, move user to highscores html page
      window.location.href = "highscores.html"
  }
});
