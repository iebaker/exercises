function run() {
    var targetWord = document.getElementById("markov-1-input").value;
    document.getElementById("markov-1-target").innerHTML = targetWord;

    // We use the split method to break up a document into a list of words
    var words = document.getElementById("markov-1-textarea").value.split(" ");

    // Your code here!
}

document.getElementById("markov-1-button").addEventListener("click", run);
