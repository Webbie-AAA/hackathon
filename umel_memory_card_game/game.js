const graphics = require('./graphics.js');
const prompt = require("prompt-sync")();

console.log(graphics.logo)

console.log('\n\n\n\n');

console.log(graphics.backOfCards);

const user_choice_1 = prompt('\nChoose a number for your first card pick: ');
const user_choice_2 = prompt('\nChoose a number for your second card pick: ');
console.log('\n');

console.log(graphics.card_dict[user_choice_1].front);
console.log(graphics.card_dict[user_choice_2].front);


const card_graphic = graphics.card_dict;
if (card_graphic[user_choice_1].front != card_graphic[user_choice_2].front){
    console.log(`It's not a match!\n`)

    console.log("The cards you picked where: \n")
    console.log(card_graphic[user_choice_1].back);
    console.log(graphics.card_dict[user_choice_1].front);
    console.log(card_graphic[user_choice_2].back);
    console.log(graphics.card_dict[user_choice_2].front);
    console.log("\n Better luck next time!")

} else if (card_graphic[user_choice_1].front == card_graphic[user_choice_2].front){
    console.log("It's a match!\n")
    
    console.log("The cards you picked where: \n")
    console.log(card_graphic[user_choice_1].back);
    console.log(graphics.card_dict[user_choice_1].front);
    console.log(card_graphic[user_choice_2].back);
    console.log(graphics.card_dict[user_choice_2].front);
}