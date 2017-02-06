function makeMarkovText() {
    var words = document.getElementById("markov-2-textarea").value.split(" ");
    var startingWord = document.getElementById("markov-2-word-input").value;
    var wordCount = parseInt(document.getElementById("markov-2-count-input").value);
    var answer = document.getElementById("markov-2-answer");

    var markovMap = {};
    for (var i = 0; i < words.length; i++) {
        markovMap[words[i]] = [];
    }

    for (var i = 1; i < words.length; i++) {
        markovMap[words[i - 1]].push(words[i]);
    }

    var result = [startingWord];
    var currentWord = startingWord;
    for (var i = 0; i < wordCount - 1; i++) {
        var possibilities = markovMap[currentWord];

        // This will happen when we reach the last word in the document, since nothing followed it
        // If so, start back at the starting word so we don't get stuck!
        if (possibilities === undefined) {
            currentWord = startingWord;
        } else {
            currentWord = possibilities[Math.floor(Math.random() * possibilities.length)];
        }
        result.push(currentWord);
    }

    answer.innerHTML = result.join(" ");
}

document.getElementById("markov-2-button").addEventListener("click", makeMarkovText);
