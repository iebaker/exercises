function playNumberGuess() {
    var low = parseInt(document.getElementById("range-low").value);
    var high = parseInt(document.getElementById("range-high").value);

    var correct = Math.floor(Math.random() * (high - low)) + low;
    var guess = NaN;

    while (guess !== correct) {
        if (isNaN(guess)) {
            guess = parseInt(prompt("Guess a number!"));
        } else {
            if (guess < correct) {
                guess = parseInt(prompt("Too low, guess again!"));
            } else if (guess > correct) {
                guess = parseInt(prompt("Too high, guess again!"));
            }
        }
    }

    alert("You win!");
}

document.getElementById("play-button").addEventListener("click", playNumberGuess);
