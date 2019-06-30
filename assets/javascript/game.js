var userGuess
var characters = ["audreyhorne", "benjaminhorne", "bob", "bobbybriggs", "dalecooper", "evilcoop", "thefireman", "gordoncole", "laurapalmer", "lelandpalmer", "loglady", "shellyjohnson"]
var wins = 0
var blanks = []


function gameStart() {
    var wrongLetters = []
    var blanks = []
    // determines random character
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
                        document.getElementById("instructions").innerHTML = "You win! Click restart to play again!";
                        document.getElementById("restartbutton").style.display = "block";

                        //displays character image based on result, there might be a quicker way for this but i couldnt get anything else working 
                        if (actual == "audreyhorne") {
                            document.getElementById("audrey").style.display = "block";
                        }
                        else if (actual == "benjaminhorne") {
                            document.getElementById("ben").style.display = "block";
                        }
                        else if (actual == "bob") {
                            document.getElementById("bob").style.display = "block";
                        }
                        else if (actual == "bobbybriggs") {
                            document.getElementById("bobby").style.display = "block";
                        }
                        else if (actual == "dalecooper") {
                            document.getElementById("coop").style.display = "block";
                        }
                        else if (actual == "evilcoop") {
                            document.getElementById("evilcoop").style.display = "block";
                        }
                        else if (actual == "thefireman") {
                            document.getElementById("fireman").style.display = "block";
                        }
                        else if (actual == "gordoncole") {
                            document.getElementById("gordon").style.display = "block";
                        }
                        else if (actual == "laurapalmer") {
                            document.getElementById("laura").style.display = "block";
                        }
                        else if (actual == "lelandpalmer") {
                            document.getElementById("leland").style.display = "block";
                        }
                        else if (actual == "loglady") {
                            document.getElementById("loglady").style.display = "block";
                        }
                        else if (actual == "shellyjohnson") {
                            document.getElementById("shelly").style.display = "block";
                        }

                    }


                }

            }

        }

        //wrong letters get sent to array at bottom and guesses goes down
        else if (wrongLetters.includes(userGuess) == false) {
            wrongLetters.push(userGuess);
            --remainingGuesses;
            document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
            document.getElementById("remaining").innerHTML = remainingGuesses;
            //losing conditions
            if (remainingGuesses <= 0) {
                document.getElementById("instructions").innerHTML = "You Lose! Click restart to play again!";
                document.getElementById("restartbutton").style.display = "block";
            }
        }


    }


};
//resets the games variable to start again
function endGame() {
    var remainingGuesses = 10
    var wrongLetters = []
    document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
    document.getElementById("remaining").innerHTML = remainingGuesses;
    document.getElementById("instructions").innerHTML = "Press any letter to get started!";
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

    //calls function to start game over
    gameStart();


};


// calls game to start
gameStart();
