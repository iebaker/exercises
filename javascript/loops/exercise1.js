var exerciseOneBody = document.getElementById("exercise-1-body");

/*var divOne = document.createElement("div");
divOne.innerHTML = "This is div 1";
exerciseOneBody.appendChild(divOne);

var divTwo = document.createElement("div");
divTwo.innerHTML = "This is div 2";
exerciseOneBody.appendChild(divTwo);

var divThree = document.createElement("div");
divThree.innerHTML = "This is div 3";
exerciseOneBody.appendChild(divThree);

var divFour = document.createElement("div");
divFour.innerHTML = "This is div 4";
exerciseOneBody.appendChild(divFour);*/

var i
var div = document.createElement("div");
for (var i = 1; i < 11; i ++) {
  div.innerHTML += "<div>This is div" + i + "</div";
  exerciseOneBody.appendChild(div);
}
