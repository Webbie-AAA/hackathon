
// user
// [] [] [] [img] - is the actual image
// [1] [2] [3]. [4]. - that all gets printed terminal

let images_array = ["[🗡️]", "[🤨]", "[🙈]", "[😳]",
                    "[🔥]", "[🥷🏽]", "[🧠]", "[💨]", 
                    "[🗡️]", "[🤨]", "[🙈]", "[😳]", 
                    "[🔥]", "[🥷🏽]", "[🧠]", "[💨]",]

let numbers_array = ["[1]", "[2]", "[3]", "[4]",
                     "[5]", "[6]", "[7]", "[8]",
                     "[9]", "[10]", "[11]", "[12]",
                     "[13]", "[14]", "[15]", "[16]"]
                     

let cards = [
    {1:"[ 🗡️ ]"},
    {2:"[ 🤨 ]"},
    {3:"[ 🙈 ]"},
    {4:"[ 😳 ]"},
    {5:"[ 🔥 ]"},
    {6:"[ 🥷🏽 ]"},
    {7:"[ 🧠 ]"},
    {8:"[ 💨 ]"},
    {9:"[ 🗡️ ]"},
    {10:"[ 🤨 ]"},
    {11:"[ 🙈 ]"},
    {12:"[ 😳 ]"},
    {13:"[ 🔥 ]"},
    {14:"[ 🥷🏽 ]"},
    {15:"[ 🧠 ]"},
    {16:"[ 💨 ]"}
]

console.log(numbers_array)
console.log(cards[0][1])

let choice1 = prompt('pick a card from the aray')
//1. Problem 1: Shuffle array of cards.
// function shuffleImages(cards) {
//     for ( )
// }



//Problem 2: Match shuffled array of image cards, to corresponding 
//number card. 
//  user input: 1 & 2

//  How to connect user input to back of card. 

// two prompts 
// input 1: 1
// input 2: card 2




//  1 & 2 ---> [1], [2]


//  How to connect back of card to front of card.


//  [1] &  [2] ----> "[🗡️]", "[🤨]"               


// computer
// [] [] [] [img] - is the actual image
// [1] [2] [3]. [4]. - that all gets printed terminal

// image matching 

// Shared cards in the middle. Displayed between the players on the terminal

// OG image cards: ASCII art cards

// Number cards displayed on terminal: ASCII Number cards

// Art card number <-> ASCII card number (???)

// START: 
// c
// [1] [2] [3]. [4].

// [2] [3] [4]. [8].


// arr = [img] [img] [img] [img] [img] [img] [img] [img] - shuffle. 2 of every image. 

// user pick two card [pick number of card] = 3  & 4 


// display the two cards they picked by calling the index of them:
// [img]. [img]

// USER ARRAY 
// COMPUTER ARRAY 
// 3 & 4 same image => take the card
// Append to user array. 

// Winner one with the most pairs. (longest length in array == wins)



/* 
.:::.
:.".:
( L )
  -  
*/



// Source - https://stackoverflow.com/a/64381240
// Posted by Barmar
// Retrieved 2026-10-23, License - CC BY-SA 4.0

// console.log(`_______                                       
// \  ___ \`'.            /|                 .--. 
//  ' |--.\  \           ||                 |__| 
//  | |    \  '          ||                 .--. 
//  | |     |  '         ||  __        __   |  | 
//  | |     |  | _    _  ||/'__ '.  .:--.'. |  | 
//  | |     ' .'| '  / | |:\`  '. '/ |   \ ||  | 
//  | |___.' /'.' | .' | ||     | |\`" __ | ||  | 
// /_______.'/ /  | /  | ||\    / ' .'.''| ||__| 
// \_______|/ |   \`'.  | |/\'..' / / /   | |_    
//            '   .'|  '/'  \`'-'\`  \ \._,\ '/    
//             \`-'  \`--'            \`--'  \`" `);

            
//Use a template literal to embed newlines in the string. 
// You'll need to escape the backticks that are in the string. 

// Source - https://stackoverflow.com/a/64381249
// Posted by Dimitri Kopriwa, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-23, License - CC BY-SA 4.0

// console.log(`%c
// _______                                       
// \  ___ \`'.            /|                 .--. 
//  ' |--.\  \           ||                 |__| 
//  | |    \  '          ||                 .--. 
//  | |     |  '         ||  __        __   |  | 
//  | |     |  | _    _  ||/'__ '.  .:--.'. |  | 
//  | |     ' .'| '  / | |:/\`  '. '/ |   \ ||  | 
//  | |___.' /'.' | .' | ||     | |\`" __ | ||  | 
// /_______.'/ /  | /  | ||\    / ' .'.''| ||__| 
// \_______|/ |   \`'.  | |/\'..' / / /   | |_    
//            '   .'|  '/'  \`'-'\`  \ \._,\ '/    
//             \`-'  \`--'            \`--'  \`" 
// `, `font-family: monospace`);

// console.log(`%c

// .:::.
// :.".:
// ( L )
//   -  
//     `, `font-family: monospace`);


    
    
// console.log('😍')
