//rockPaperScissorsBot.js
//4 Nov, 2016
"use strict";

window.onload = function () {

/* Logic used (1 > 3 ; 2 > 1 ; 3 > 2) */
var botChoice = Math.round(Math.random() * 2) + 1;

var userChoice = prompt('Type your choice: \n"Rock", "Paper" or "Scissors".');

if (userChoice == 'Rock'){
    userChoice = 1;
} else if ( userChoice == 'Paper'){
    userChoice = 2;
} else if ( userChoice == 'Scissors'){
    userChoice = 3;
}

if (userChoice === botChoice){
    var text;
    if ( userChoice === 1 ){
        text = 'rock';
    } else if ( userChoice === 2){
        text = 'paper';
    } else if ( userChoice === 3){
        text = 'scissors';
    }
    console.log('You both chose ' + text + '\nDraw!');
} else if ( userChoice === 1 && botChoice === 3){
    console.log('You chose rock\nBot chose scissors\nYou won!');
} else if ( userChoice === 3 && botChoice === 1){
    console.log('You chose scissors\nBot chose rock\nBot won!');
} else if ( userChoice === 2 && botChoice === 1){
    console.log('You chose paper\nBot chose rock\nYou won!');
} else if ( userChoice === 1 && botChoice === 2){
    console.log('You chose rock\nBot chose paper\nBot won!');
} else if ( userChoice === 3 && botChoice === 2){
    console.log('You chose scissors\nBot chose paper\nYou won!');
} else if ( userChoice === 2 && botChoice === 3){
    console.log('You chose paper\nBot chose scissors\nBot won!');
}

}