// Psychic Game

// Create an array of letters in the alphabet

var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create a random number
var randomNumber = Math.floor(Math.random() * letters.length);

// Use the random number to pick from the letters array.
var computerGuess = letters[randomNumber];

console.log(computerGuess);