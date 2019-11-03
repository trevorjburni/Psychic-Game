// Psychic Game

// Create an array of letters in the alphabet, variable to keep track of wins and losses
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guess = "";

// create a random number
var randomNumber = Math.floor(Math.random() * letters.length);

// Use the random number to pick from the letters array.
var computerGuess = letters[randomNumber];


// Keep track of what the user guesses
var userGuesses = [];

function reset() {
    guessesRemaining = 9;
    randomNumber = Math.floor(Math.random() * letters.length);
    computerGuess = letters[randomNumber];
    userGuesses = [];
    document.getElementById("guessed-so-far");
}
function update() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessed-so-far").innerHTML = "You're Guesses so far: ";
    document.getElementById("guesses-remaining").innerHTML = "Guesses left: " + guessesRemaining;
}

document.onkeyup = function (event) {
    // Set variable to store the users guess
    guess = event.key.toLowerCase();
    if (letters.includes(guess)) {
        if (userGuesses.includes(guess)) {
            return;
        } else {
            userGuesses.push(guess);
            document.getElementById("guessed-so-far").append(guess + ", ");


            // test if guess is correct
            if (guess === computerGuess) {
                wins++;
                reset()
                update();
            } else {
                guessesRemaining--;
                document.getElementById("guesses-remaining").innerHTML = "Guesses left: " + guessesRemaining;

            }
            if (guessesRemaining === 0) {
                losses++;
                reset();
                update();
            }
        }
    } else {
        return;
    }

}