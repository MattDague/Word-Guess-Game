# word guess game!
Intro
------------------------
This is a hangman game set in the Twin Peaks universe! By pressing any letter you make your first attempt at guessing the name of a multitude of characters.You only get 10 wrong letters so you better be familiar. 

Once the game is won or lost the text will change and a reset button will appear to send you back to the start. If you win however you it will give you a notch in the win column. You also get a nice picture of the person you guessed!

Challenge
-----------------------
The challenge for project was to create a hangmang style game using basic javascript. This was my first javascript project. To complete the task the javascript calls on a random characters name  and creates a blank space for each letter in that characters name using a for loop. The javascript is set to check for a user key press against the array/string for each characters name and replace the blank if a match exists. If there is no match the letter is passed to another array of wrong letters. If the user guesses all correct the javascript changes the display of the images already on the page to show the matching character.