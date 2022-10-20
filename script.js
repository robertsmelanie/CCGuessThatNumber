// Guess that number
// Message to be used through the project / file
const enterNumText = 'Please enter a number greater than zero.';

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the number that the user will guess
let randomNum;

// For storing the number of attempts the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing the user's response to play again or not play again
let playAgain;

// Starting alert message
alert('Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game');

// Game restarts as long as restartGame has a value of true
while (restartGame) {
    // Asks user to enter a number to set the upper bound for the random number that will be created
    rangeNum = prompt('Please enter a maximum number for the range');

    // Using parseInt to attempt to convert the user's response  into a number value
    rangeNum = parseInt(rangeNum);

    // Verifies the user's entry for a range number is a number greater than zero (NOTE: All numbers, positive or negative, have a default boolean value of tree, except for zero which has a default value of false. Also NaN is false)
    //      ! prevents 0 by preventing a false which is zero from being used  
    // and <1 prevents negative numbers
    while (!rangeNum || rangeNum <1) {
        rangeNum = prompt(enterNumText);
        rangeNum - parseInt(rangeNum);
    }
    // Create the random number using the range number entered by the user
    randomNum = Math.floor(Math.random () * rangeNum) + 1;

    //Prompts user to enter a number of attempts allowed (AKA number of guesses)
    attempts = parseInt(prompt('Please enter a number of attempts allowed:'));

    // Verifying the user's entry for a number of attempts allowed is a number greater than zero and equal to or less than the range they set
    while(!attempts || attempts < 1 || attempts > rangeNum){
        attempts = parseInt(prompt(`Please enter a number from one to ${rangeNum}`));
    }
    // Asks user to enter a guess in the range they set
    //guess = prompt('Please enter a guess from 1 to ${rangeNum}'
        // Asks user to enter a guess in the range they set
        guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);

        // Continues looping until the user guesses the correct number or runs out of attempts (NOTE: Loops until a BREAK keyword is run)
        while (true){
    
            // Displays the number when a code word is entered
            if (guess === `Melon`) {
                alert(`The number is ${randomNum}`);
                // Prompts the user to enter another guess
                guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
                
            }
    
            // Tries convert the user's guess into a number
            guess = parseInt(guess);
    
            // Verifies the user's guess is a number greater than zero and less than or equal to the range they set
            while (!guess || guess < 1 || guess > rangeNum){
                guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
            }
    
            // Removes an attempt
            attempts--;
    
            // Checks if user guessed correctly. If so, then the game ends.
            if (guess === randomNum){
                alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
                break;
    
            // Checks if user has any attempts left. If not, then the game ends and the number is displayed to the user.
            } else if (attempts === 0){
                alert(`Sorry, but you have run out of attempts :(The number was ${randomNum})`);
                break;
    
                // Checks if user's guess was too low and prompts user to guess again if so
            } else if (guess < randomNum){
                guess = prompt(`Too low. You have ${attempts} attempt(s) left.`);
                // The only other possibility is the user's guess was too high so the user is prompted again
            } else {
                guess = prompt(`Too high. You have ${attempts} attempt(s) left.`);
            }
        } 
    
        // Prompts user with option to play again
        playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);
    
        // Loop continues until user submits a valid response
        while (true){
            // Check if the user's answer is no (AKA `N` or `n`)
            if (playAgain.toUpperCase() === `N`){
                // Alerts the user that the game is over and the game does NOT restart
                alert(`Thanks for playing!`);
                restartGame = false;
                break;
    
                // Checks if the user's answer is yes (AKA `Y` or `y`)
            } else if (playAgain.toUpperCase() === `Y`){
                // The games restarts
                break;
            } else {
                playAgain = prompt(`Please enter Y or N.`);
            }
        }
/* Original notes
    // Asks user to enter a guess in the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);

       // Continues looping until the user guesses the correct number or runs out of attempts (NOTE: Loops until a BREAK keyword is run)
       while (true){
        // Displays the number when a code word is entered
        if (guess === 'Melon'){
            alert('The number is ${randomNum}');
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
        }
        // Tries to convert the user's guess into a number
        guess = parseInt(guess);

        // Verify the user's guess is a number greater than zero and less than or equal to the range they set
       }
*/


// restartGame = false;

}

