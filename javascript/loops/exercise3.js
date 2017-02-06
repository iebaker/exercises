function playNumberGuess() {
    var low = parseInt(document.getElementById("range-low").value);
    var high = parseInt(document.getElementById("range-high").value);
    alert("You win!");
}

document.getElementById("play-button").addEventListener("click", playNumberGuess);
