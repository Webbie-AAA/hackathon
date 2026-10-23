// computer generate a random number between 1-100
// get user input
// if userInput == computer 
//  print "you win"

const prompt = require('prompt-sync')({ sigint: true });

let gamePlay = true
let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
while (gamePlay === true) {
    let userInput = prompt("\nGuess a number between 1 and 100: ")

    if (userInput == randomNumber) {
        console.log(`\nThe number was ${randomNumber}. You win!`)
        gamePlay = false
    } else {
        console.log(`\nNot quite, try again!`)
    }
}