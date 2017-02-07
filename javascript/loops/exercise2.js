function squareN() {
    var N = parseInt(document.getElementById("N").value);
    var result = N * N;
    document.getElementById("answer").innerHTML = result;
}

function sumOneToN() {
  var N = parseInt(document.getElementById("N").value);
  var result = 1;
  for (var i = 2; i <= N; i ++) {
  result += i;
  }
document.getElementById("answer").innerHTML = result;
}

function oddSumOneToN() {
  var N = parseInt(document.getElementById("N").value);
  var result = 1;
  for (var i = 3; i <= N; i += 2) {
  result += i;
  }
document.getElementById("answer").innerHTML = result;
}

function stars() {
  var N = parseInt(document.getElementById("N").value);

  document.getElementById("answer").innerHTML = result;
}


function superStars() {
  var N = parseInt(document.getElementById("N").value);

  document.getElementById("answer").innerHTML = result;
}


function nthFibonacci() {
  var N = parseInt(document.getElementById("N").value);

  document.getElementById("answer").innerHTML = result;
}


document.getElementById("square-button").addEventListener("click", squareN);
document.getElementById("sum-up-to-button").addEventListener("click", sumOneToN);
document.getElementById("sum-odd-to-button").addEventListener("click", oddSumOneToN);
document.getElementById("show-stars-button").addEventListener("click", stars);
document.getElementById("super-stars-button").addEventListener("click", superStars);
document.getElementById("fibonacci-button").addEventListener("click", nthFibonacci);
