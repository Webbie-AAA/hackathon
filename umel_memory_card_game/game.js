const graphics = require('./graphics.js');
const prompt = require("prompt-sync")();

console.log(graphics.logo)

console.log('\n\n\n\n');

console.log(graphics.backOfCards);

let comp_matches_arr = [];
let user_matches_arr = [];
let game_play = true;

while (game_play===true){


        let user_choice_1 = prompt('\nChoose a number for your first card pick: ');
        console.log('\n\n');
        let user_choice_2 = prompt('\nChoose a number for your second card pick: ');
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
            console.log("\n Better luck next time!\n\n")

        } else if (card_graphic[user_choice_1].front == card_graphic[user_choice_2].front){
            console.log("It's a match!\n")


            user_matches_arr.push([user_choice_1, user_choice_2]);
            console.log(`Your current matches: ${user_matches_arr}`)
        }

        console.log("Your contender is making their choices\n\n");
        setTimeout(() => {
            let comp_choice_1 = Math.floor(Math.random()*8)
            let comp_choice_2 = Math.floor(Math.random()*8)


            console.log(graphics.card_dict[comp_choice_1].front);
            console.log(graphics.card_dict[comp_choice_2].front);

            if (card_graphic[comp_choice_1].front != card_graphic[comp_choice_2].front){
                console.log("\n\nYour contender didn't get a match")

                console.log("\nThe cards they picked were: \n")
                console.log(card_graphic[comp_choice_1].back);
                console.log(graphics.card_dict[comp_choice_1].front);
                console.log(card_graphic[comp_choice_2].back);
                console.log(graphics.card_dict[comp_choice_2].front);
                console.log("\n Now is your chance! Go again!")


            } else if (card_graphic[comp_choice_1].front == card_graphic[comp_choice_2].front){
                console.log("\n\n Your contender had a match!")
                comp_matches_arr.push([comp_choice_1, comp_choice_2])
                console.log(`\n\nTheir current matches are: ${comp_matches_arr}`)
            }

        
        }, 3000);

        if (comp_matches_arr.length == 4|| user_matches_arr.length == 4){
            game_play = false;
            if (comp_matches_arr.length == 4){
                console.log("\nYou have lost the game!😢")
                const replay = prompt("\nType 'y' if you would like to replay: ")
                if (replay == 'y'){
                    game_play = true;
                }   
            }
            if (user_matches_arr.length == 4){
                console.log("\n Yayyyy! You have won THE GAME! 🥳")
                const replay = prompt("\nType 'y' if you would like to replay: ")
                if (replay == 'y'){
                    game_play = true;
                }  
            }
        }   

    }
