var userGuess
var characters = ["Audrey", "Ben", "Bob", "Bobby", "Coop", "Evil Coop", "Fireman", "Gordon", "Laura", "Leland", "Log Lady", "Shelly"]



document.onkeyup = function(event) {

var userGuess = event.key;
var actual = characters[Math.floor(Math.random() * characters.length)];

document.getElementById("current").innerHTML = actual;


console.log(actual);}h