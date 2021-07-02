/* WELCOME MESSAGES */

function welcome() {
	if (confirm("Hello there, Violet!\n\nAre you ready to do some homework?") === true) {
		alert("Hooray!\nLet's get started!");
	}

	else {
		alert("Oh no!\nI hope you change your mind.");
	}
}

/* SPELLING WORDS */

function spell1() {

	var word1 = document.getElementById('word1').value;

	if (word1.toUpperCase() === "NARRATOR") {
		alert("Awesome!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell2() {

	var word2 = document.getElementById('word2').value;

	if (word2.toUpperCase() === "THINGS") {
		alert("Great spelling!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell3() {

	var word3 = document.getElementById('word3').value;

	if (word3.toUpperCase() === "COULDN'T") {
		alert("You've got skills!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell4() {

	var word4 = document.getElementById('word4').value;

	if (word4.toUpperCase() === "EVERYONE") {
		alert("Smarty Pants!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell5() {

	var word5 = document.getElementById('word5').value;

	if (word5.toUpperCase() === "THAT'S") {
		alert("Super Duper!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell6() {

	var word6 = document.getElementById('word6').value;

	if (word6.toUpperCase() === "THROUGH") {
		alert("Well done!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell7() {

	var word7 = document.getElementById('word7').value;

	if (word7.toUpperCase() === "I'VE") {
		alert("This was too easy!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell8() {

	var word8 = document.getElementById('word8').value;

	if (word8.toUpperCase() === "SCHOOL") {
		alert("Superstar!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell9() {

	var word9 = document.getElementById('word9').value;

	if (word9.toUpperCase() === "AROUND") {
		alert("You did it AGAIN!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

function spell10() {

	var word10 = document.getElementById('word10').value;

	if (word10.toUpperCase() === "THINK") {
		alert("You know your words too well!");
	}

	else {
		alert("Oops! TRY AGAIN.")
	}
}

/* PLAY AUDIO FOR SPELLING */

function audio1(url) {
	new Audio(url).play();
}

function audio2(url) {
	new Audio(url).play();
}

function audio3(url) {
	new Audio(url).play();
}

function audio4(url) {
	new Audio(url).play();
}

function audio5(url) {
	new Audio(url).play();
}

function audio6(url) {
	new Audio(url).play();
}

function audio7(url) {
	new Audio(url).play();
}

function audio8(url) {
	new Audio(url).play();
}

function audio9(url) {
	new Audio(url).play();
}

function audio10(url) {
	new Audio(url).play();
}





