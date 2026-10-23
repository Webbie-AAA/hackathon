const prompt = require('prompt-sync')({ sigint: true });

//Rock paper scissors
// 

// function for userInput
//let userInput = prompt('name?')
// max two players
// option of two players or one player against computer
// choices = ["rock, "paper", "scissors"] 
// randomiser : Math.random() * choices.length
// if conditions: rock beats scissors
// paper beats rock
// scissors beats paper
// 



// Rock wins: Scissors
// Rock loses: Paper
// else: draw

// Paper wins: rock
// Paper loses: scissors
// else: draw

// Scissors wins: paper
// Scissors loses: Rock
// else: draw

// let gamePlay = true;

// while (gamePlay){}


// --- you win or you lose: gamePlay = false;

// if (userInput === "rock") {
//     if (computer === "scissors") {
//         console.log("you win!")
//     } else if (computer === "paper") {
//         console.log("you lose!")
//     } else {
//         console.log("draw")

//     }
// } else if (userInput === "paper") {
//     if (computer === "rock") {
//         console.log("you win!")
//     } else if (computer === "scissors") {
//         console.log("you lose!")
//     } else {
//         console.log("draw")
//     }
// } else if (userInput === "scissors") {
//     if (computer === "paper") {
//         console.log("you win!")
//     } else if (computer === "rock") {
//         console.log("you lose!")
//     } else {
//         console.log("draw")
//     }
// } 


let choices = ["rock", "paper", "scissors"]

// function userChoice() {
//     let userInput = prompt("Choose rock, paper, or scissors: ")
//     return userInput
// }

let gamePlay = true;

while (gamePlay === true) {
    let indexOfCompChoice = Math.floor(Math.random() * 3);
    let computer = choices[indexOfCompChoice]

    console.log('before run' + gamePlay)

    let userChoice = prompt("Choose rock, paper, or scissors: ")
    console.log(`computer chose ${computer}`);

    let status = '';

    if (userChoice === "rock") {
        if (computer === "scissors") {
            status = 'You Win!'
        } else if (computer === "paper") {
            status = 'You Lose!'
        } else {
            status = 'Draw'

        }
    } else if (userChoice === "paper") {
        if (computer === "rock") {
            status = 'You Win!'
        } else if (computer === "scissors") {
            status = 'You Lose!'
  
        } else {
            status = 'Draw'
        }
    } else if (userChoice === "scissors") {
        if (computer === "paper") {
            status = 'You Win!'
        } else if (computer === "rock") {
            status = 'You Lose!'
        } else {
            status = 'Draw'
        }
    }

    if (status != 'Draw') {
        gamePlay = false;
    }

    console.log(status)
}
