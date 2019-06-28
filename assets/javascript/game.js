var userGuess
var characters = ["AudreyHorne", "BenjaminHorne", "Bob", "BobbyBriggs", "DaleCooper", "EvilCoop", "TheFireman", "GordonCole", "LauraPalmer", "LelandPalmer", "LogLady", "ShellyJohnson"]
var audrey = ["a", "u", "d", "r", "e", "y"]
var blanks = []


// determines random character
var actual = characters[Math.floor(Math.random() * characters.length)];

console.log(actual);


// places - marks based on amount of letters in characters name
for ( i=0; i < actual.length; i++) {
    blanks.push('-'); 
      
};


// checks user input
document.onkeyup = function(event) {
var userGuess = event.key;
document.getElementById("current").innerHTML = blanks.join("");
console.log(userGuess);


//checks if users guess conforms to actual answer
if (actual.indexOf(userGuess) > -1) {;
    console.log(true);
}

else {
    console.log(false)
}



// use for loop and index of to replace dashes with individual letters,  if guess doesnt match put in loss column
// you can use indexof() to replace letters!
// you can set variables equal to functions

// you can fix the start by putting it in a function and calling it, function name(){}; name()
// maybe restart button calls that function again?
}
console.log(blanks);

// console.log(actual.length);

// //     return {blanks
        






























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