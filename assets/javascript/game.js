var userGuess
var characters = ["audreyhorne", "benjaminhorne", "bob", "bobbybriggs", "dalecooper", "evilcoop", "thefireman", "gordoncole", "laurapalmer", "lelandpalmer", "loglady", "shellyjohnson"]
var wins = 0
var blanks = []


// determines random character

// var actual = characters[Math.floor(Math.random() * characters.length)];

// console.log(actual);


function gameStart() {
    var wrongLetters = []
    var blanks = []
    var actual = characters[Math.floor(Math.random() * characters.length)];
    var remainingGuesses = 10
    // places - marks based on amount of letters in characters name


    for (i = 0; i < actual.length; i++) {
        blanks.push('-');
    };
    console.log(actual);

    console.log(blanks);

    // checks user input
    document.onkeyup = function (event) {
        var userGuess = event.key;
        document.getElementById("current").innerHTML = blanks.join("");
        console.log(userGuess);


        //checks if users guess conforms to actual answer
        if (actual.indexOf(userGuess) > -1) {

            // replaces blanks with letters

            for (var h = 0; h < actual.length; h++) {
                if (userGuess === actual[h]) {
                    blanks[h] = userGuess;
                    document.getElementById("current").innerHTML = blanks.join("");

                    //add to win column if no blanks are left
                    if (blanks.includes("-") == false) {
                        wins++;
                        document.getElementById("wins").innerHTML = wins;
                        document.getElementById("instructions").innerHTML = "Click restart to play again!";
                        document.getElementById("restartbutton").style.display = "block";

                        //displays character image based on result, there might be a quicker way for this but i couldnt get anything else working 
                            if (actual == "audreyhorne"){
                            document.getElementById("audrey").style.display = "block";
                        }   
                        else if (actual == "benjaminhorne"){
                            document.getElementById("ben").style.display = "block";
                        }
                        else if (actual == "bob"){
                            document.getElementById("bob").style.display = "block";
                        }
                        else if (actual == "bobbybriggs"){
                            document.getElementById("bobby").style.display = "block";
                        }
                        else if (actual == "dalecooper"){
                            document.getElementById("coop").style.display = "block";
                        }
                        else if (actual == "evilcoop"){
                            document.getElementById("evilcoop").style.display = "block";
                        }
                        else if (actual == "thefireman"){
                            document.getElementById("fireman").style.display = "block";
                        }
                        else if (actual == "gordoncole"){
                            document.getElementById("gordon").style.display = "block";
                        }
                        else if (actual == "laurapalmer"){
                            document.getElementById("laura").style.display = "block";
                        }
                        else if (actual == "lelandpalmer"){
                            document.getElementById("leland").style.display = "block";
                        }
                        else if (actual == "loglady"){
                            document.getElementById("loglady").style.display = "block";
                        }
                        else if (actual == "shellyjohnson"){
                            document.getElementById("shelly").style.display = "block";
                        }


                        // if(blanks == "audreyhorne"){ 
                        //     document.getElementById("audrey").style.display = "block";
                        // }





                        // return blanks;
                    }


                }
                
        // else if (wrongLetters.includes(userGuess) == false) {
        //     wrongLetters.push(userGuess);
        //     --remainingGuesses;
        //     document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
        //     document.getElementById("remaining").innerHTML = remainingGuesses;
        //     if (remainingGuesses <= 0) {
        //         document.getElementById("instructions").innerHTML = "Click restart to play again!";
        //         document.getElementById("restartbutton").style.display = "block";
        //     }
            }




        }


        else if (wrongLetters.includes(userGuess) == false) {
            wrongLetters.push(userGuess);
            --remainingGuesses;
            document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
            document.getElementById("remaining").innerHTML = remainingGuesses;
            if (remainingGuesses <= 0) {
                document.getElementById("instructions").innerHTML = "Click restart to play again!";
                document.getElementById("restartbutton").style.display = "block";
            }
        }
    }









    // use for loop and index of to replace dashes with individual letters,  if guess doesnt match put in loss column
    // you can use indexof() to replace letters!
    // you can set variables equal to functions

    // you can fix the start by putting it in a function and calling it, function name(){}; name()

    // maybe restart button calls that function again?



    console.log(wrongLetters);
};

function endGame() {
    var remainingGuesses = 10
    var wrongLetters = []
    document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
    document.getElementById("remaining").innerHTML = remainingGuesses;
    //clears images
    document.getElementById("audrey").style.display = "none";
    document.getElementById("ben").style.display = "none";
    document.getElementById("fireman").style.display = "none";
    document.getElementById("coop").style.display = "none";
    document.getElementById("evilcoop").style.display = "none";
    document.getElementById("bob").style.display = "none";
    document.getElementById("bobby").style.display = "none";
    document.getElementById("gordon").style.display = "none";
    document.getElementById("laura").style.display = "none";
    document.getElementById("leland").style.display = "none";
    document.getElementById("loglady").style.display = "none";
    document.getElementById("shelly").style.display = "none";

    // initial();
    gameStart();


};


// function restart() {
//     endGame()


// };



gameStart();







// things to code


// 1. code takes var actual and uses char at to determine letters





// 2. letters turn into underscores for same amount of total letters

// 3.  game checks userGuess with letters

// 4. game replaces underscore with correct letters

// 5.game places incorrect letters at bottom

// 6. game subtracts number of guesses after wrong answer

// 7. if number of guesses = 0 display lose and reset

// 8. if word is completed display win, display picture

// 9. Make reset button instead?'


// test