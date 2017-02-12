// 1. What are the values of x and y after this code is run?
var x = 10;
var y = 11;
y += 2;
x = x + y;

// 2. What are the values of x and y after this code is run?
var x = 100;
var y = x;
x = (y - x) * 99;
y += x;

// 3. What is the value of result after this code is run?
var word1 = "cat";
var word2 = "dog";
var result = word1 + "" + word2 + word1;

// 4. What is the value of z after this code is run?
var x = 10;
var y = 200;

var z;
if (x < y) {
	z = x + y;
} else {
	z = x - y;
}

// 5. What does the alert say?
var x = 1000;

if (x > 10) {
	alert("x is big!");
} else if (x === 10) {
	alert("x is 10");
} else {
	alert("x is little!");
}

// 6. Of the variables answer1, answer2, answer3, and answer4, 
//    three have the same value after the code is run. Which one is different?
var x = 100.1;
var y = 99.6;

var answer1 = Math.round(x + y);
var answer2 = Math.floor(y) + Math.ceil(x);
var answer3 = Math.round(x + Math.round(y));
var answer4 = Math.floor(Math.ceil(x) + Math.ceil(y));

// ===========================================================
// What are the values of the following boolean expressions? =
// ===========================================================

// 7.
true || false

// 8.
true && false

// 9.
true && (false || true)

// 10.
!false && !(true || false)

// 11.
parseInt("3" + "4") === 7

// ==============================================
// How many times will each of these loops run? =
// ==============================================

// 12.
for (var i = 1; i <= 10; i++) {

}

// 13.
for (var i = 55; i < 65; i++) {

}

// 14.
for (var i = 0; i <= 10; i += 2) {

}

// 15.
for (var i = 10; i > 0; i = i - 3) {

}

// 16.
for (var i = 1; i <= 512; i *= 2) {

}

// 17.
var silly = 10;
for (var i = 5; i !== silly; i++) {

}

// 18.
var silly = 10;
for (var buzz = 0; silly > 0; silly--) {
	buzz++;
	if (buzz > 3) {
		break;
	}
}

// 19.
for (var b = true; b; b = !b) {

}

// 20.
for (var word = ""; word !== "*****"; word += "*") {

}

// 21.
for (var i = 1; i !== 10; i += 2) {

}











