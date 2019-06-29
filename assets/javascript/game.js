var userGuess
var characters = ["audreyhorne", "benjaminhorne", "bob", "bobbybriggs", "dalecooper", "evilcoop", "thefireman", "gordoncole", "laurapalmer", "lelandpalmer", "loglady", "shellyjohnson"]
var remainingGuesses = 10
var wrongLetters = []
var blanks = []
var wins = 0
console.log(remainingGuesses)

// determines random character

var actual = characters[Math.floor(Math.random() * characters.length)];

console.log(actual);

function gameStart() {
// places - marks based on amount of letters in characters name

 for ( i=0; i < actual.length; i++) {
 blanks.push('-'); 
};
 
console.log(blanks);

;
// checks user input
document.onkeyup = function(event) {
var userGuess = event.key;
document.getElementById("current").innerHTML = blanks.join("");
console.log(userGuess);


//checks if users guess conforms to actual answer
if (actual.indexOf(userGuess) > -1) {
    console.log(true);



}

//if answer is wrong subtract from remaining guesses
// else if (wrongLetters.includes(userGuess) == true) {
//     document.getElementById("remaining").innerHTML = remainingGuesses;
// }
   
//if guess is wrong and is not listed in wrong letters, put it in wrong letters and update remaining guesses
else if (wrongLetters.includes(userGuess) == false) {
    wrongLetters.push(userGuess);
    --remainingGuesses;
    document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
    document.getElementById("remaining").innerHTML = remainingGuesses;
} 
    
}


//game restart
// if ((remainingGuesses == 0) || (actual.length == )  {
//     gameStart();
//     remainingGuesses = 0;

// };
};


// use for loop and index of to replace dashes with individual letters,  if guess doesnt match put in loss column
// you can use indexof() to replace letters!
// you can set variables equal to functions

// you can fix the start by putting it in a function and calling it, function name(){}; name()

// maybe restart button calls that function again?





gameStart();

// console.log(actual.length);

// //     return {blanks
        

// var audrey = ["a", "u", "d", "r", "e", "y"]




























//code for audrey
// if (actual === characters[0]) {

//     for( i = 0; i < audrey.length; i++) {

//         document.getElementById("current").innerHTML = "- " + "- "+ "- "+ "- "+ "- "+ "- " ;
//     }



// };
// }

// for (i = 0,  i < aud)
// var letters = actual.charAt(i);
// console.log(letters);}



// things to code


// 1. code takes var actual and uses char at to determine letters





// 2. letters turn into underscores for same amount of total letters

// 3.  game checks userGuess with letters

// 4. game replaces underscore with correct letters

// 5.game places incorrect letters at bottom

// 6. game subtracts number of guesses after wrong answer

// 7. if number of guesses = 0 display lose and reset

// 8. if word is completed display win, display picture

// 9. Make reset button instead?