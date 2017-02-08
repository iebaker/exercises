



function playNumberGuess() {
    var low = parseInt(document.getElementById("range-low").value);
    var high = parseInt(document.getElementById("range-high").value);
    var answer = makeRandomNumber(low,high);
    var guess = parseInt(prompt("Guess a number between the two you chose."));
    var i = 0;
    while (guess !== answer) {
       if (guess > answer) {
        alert("Your guess is too high");
        guess = parseInt(prompt("Guess again."));
      } else if (guess < answer) {
        alert("Your guess is too low.");
        guess = parseInt(prompt("Guess again."));
      }
    }
   alert("You win!");
}

function makeRandomNumber (low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}
    document.getElementById("play-button").addEventListener("click", playNumberGuess);
