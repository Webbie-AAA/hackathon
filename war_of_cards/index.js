// player vs computer
// player gets half of the deck of cards - 26 cards
// computer gets the other half - 26 cards
// random cards
// players take turns to reveal their top card
// whoevers card is higher wins that round and they add the card to their deck
// winner is the one who ends up with the entire deck of 52 cards


const deck_of_cards = []
for (let value = 1; value <= 13; value++){
    deck_of_card.push(value, value, value, value)
}
// [1, 1, 1, 1, 2, 2, 2, ...]

deck_of_cards.sort(() => Math.random() - 0.5)

const players = {
    player : deck_of_cards.slice(0, 26),
    computer : deck_of_cards.slice(26)
}


//Showing Cards

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
