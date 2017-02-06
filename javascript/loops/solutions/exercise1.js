var exerciseOneBody = document.getElementById("exercise-1-body");

for (var i = 1; i <= 10; i++) {
    var div = document.createElement("div");
    div.innerHTML = "This is div " + i;
    exerciseOneBody.appendChild(div);
}
