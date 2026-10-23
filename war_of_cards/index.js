// player vs computer
// player gets half of the deck of cards - 26 cards
// computer gets the other half - 26 cards
// random cards
// players take turns to reveal their top card
// who ever's card is higher wins that round and they add the card to their deck
// winner is the one who ends up with the entire deck of 52 cards


const deck_of_cards = []
for (let value = 1; value <= 13; value++){
    deck_of_cards.push(value, value, value, value)
}
// [1, 1, 1, 1, 2, 2, 2, ...]

deck_of_cards.sort(() => Math.random() - 0.5)

const players = {
    player : deck_of_cards.slice(0, 26),
    computer : deck_of_cards.slice(26)
}


//Showing Cards
// let randomIndex = Math.floor(Math.random() * 13)
// let user_play = players.player[randomIndex]
// let computer_play = players.player[randomIndex]

// when draw:
// player and computer both draw 3 cards from their deck
// both draw another card and they compare that cards value
// if that card is higher than the other, the winner takes all 6 cards that were taken originally plus the 2 taken out

// sub round : 
// if draw.
// - 1, -1 from each deck. 
// If one draw is higher than the other
// Winner + 3. Loser - 3

// until either length of array === 0;
// let i = 0;
// console.log(players.player)
// console.log(players.computer)
//  while (players.player.length > 0 && players.computer.length > 0){
//     console.log(players.player)
//     console.log(players.computer)
//     players.player[]
    
//  }
function playGame() {
    // if (players.player.length === 0 || players.computer.length === 0) {
    //     return
    // }

    let i = 0
    

    while (players.player.length > 0 && players.computer.length > 0){
        console.log('\nplayer ' + players.player[0])
        console.log('\ncomputer ' + players.computer[0])
        console.log('\n player array ' + players.player)
        console.log('\n computer array ' + players.computer)

        const player_card = players.player.shift()
        const computer_card = players.computer.shift()
        
        if (player_card > computer_card) {
            players.player.push(player_card, computer_card)
            console.log('\n player wins this round')
        } else if (computer_card > player_card) {
            players.computer.push(computer_card, player_card)
            console.log('\n computer wins this round')
        } else if (player_card === computer_card){
            console.log("\n draw")
            const player_war_card = players.player.shift()
            const computer_war_card = players.computer.shift()
            
            if (player_war_card > computer_war_card) {
                // const playerWar = players.player.length >= 4
                // const computerWar = players.computer.length >= 4
                
                // Stuck because if one or the other is less than 4 - do this
                // Whereas we want it to be, if Player wins,
                // Then check if computer has less than 4 cards - push everything
                // But we are initially check if both have less than 4 cards
                // But we're doing that before we know who has won, as a general check
                // How do we move from the general check, to code that works for when we know the
                // specific winner or the specific loser
                
                const cardsToTake = players.computer.splice(0, 3)
                players.player.push(player_card, computer_card, player_war_card, computer_war_card, ...cardsToTake)
            } else if (computer_war_card > player_war_card) {
                const cardsToTake = players.player.splice(0, 3)
                players.computer.push(player_card, computer_card, player_war_card, computer_war_card, ...cardsToTake)
            } else {
                console.log('\n draw again')
                players.player.push(player_card, player_war_card)
                players.computer.push(computer_card, computer_war_card)
            }
        }
        console.log('\n player array ' + players.player + '\n length: ' + players.player.length)
        console.log('\n computer array ' + players.computer + '\n length: ' + players.computer.length)
        i++ 
        console.log('\n\tNumber of Rounds: ' + i)
    }
    
}

playGame()


//starting point for comp and person: 26. 
// let counter. = 26 
// if counter < 52
// i++

// 
// in the object order is. {number: card_rep (A, Q, K)}
// Math.random pics random num between 1-13. And then...
// This is the user card. Same happens for the comp.
// Both are logged.
// If user card is < computer card. Computer card - their card stash
// goes. +2. Vice versa.
// The first to read 52 cards in card_stash is winner

// At what point is the user making a choice?
// Pick another card??? 'flip card?' Y or N - n then end the game
