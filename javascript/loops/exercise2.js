function squareN() {
    var N = parseInt(document.getElementById("N").value);
    var result = N * N;
    document.getElementById("answer").innerHTML = result;
}

function sumOneToN() {

}

function oddSumOneToN() {

}

function stars() {

}

function superStars() {

}

function nthFibonacci() {

}

document.getElementById("square-button").addEventListener("click", squareN);
document.getElementById("sum-up-to-button").addEventListener("click", sumOneToN);
document.getElementById("sum-odd-to-button").addEventListener("click", oddSumOneToN);
document.getElementById("show-stars-button").addEventListener("click", stars);
document.getElementById("super-stars-button").addEventListener("click", superStars);
document.getElementById("fibonacci-button").addEventListener("click", nthFibonacci);
