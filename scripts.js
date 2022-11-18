'use strict';

// const { Button } = require("bootstrap");

// // console.log(document.querySelector('.message').textContent);


// // let messageGuessing = document.querySelector('.message');
// // messageGuessing.textContent = 'bruce';

// let messageScore = document.querySelector('.score');
// messageScore.textContent = '';

// let messageNumber = document.querySelector('.number');
// messageNumber.textContent = '13'

// // let messageGuest = document.querySelector('.guess');
// // let test = messageGuest.value = '100';
// let score = 20;

// const x = function(){
//     console.log(23)
// }


// const secretNumber = Math.trunc(Math.random()*20)+1;


// for(let i = 0; i < secretNumber; i++){
//     document.querySelector('.number').textContent = secretNumber;
// }



// let buttonI = document.querySelector('.check');
// buttonI.addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value)
//     const messageGuest = Number(document.querySelector('.guess').value);
//     console.log(messageGuest, typeof messageGuest)
  
//     if(!messageGuest){
//     document.querySelector('.message').textContent = 'Please Number👀 only';
//     }else if(messageGuest === secretNumber) {
//         score++;
//         document.querySelector('.message').textContent = `your guest number ${messageGuest}🎆🎇🏆`;
//         let messageScore = document.querySelector('.score');
//         messageScore.textContent = score;
//     }else if(messageGuest > secretNumber){
//         score--;
//         document.querySelector('.message').textContent = `too high number`;
//         let messageScore = document.querySelector('.score');
//         messageScore.textContent = score;
//     }else if(messageGuest < secretNumber){
//         score--;
//         document.querySelector('.message').textContent = `to low`;
//         let messageScore = document.querySelector('.score');
//         messageScore.textContent = score - 10;
//     }else{
//         score-10;
//         document.querySelector('.message').textContent = `try again`;
//         let messageScore = document.querySelector('.score');
//     }
// })




// const input .guess
// const check = function button

// const messageScore = .score


let el = document.querySelector('.coins');

el.style.visibility="hidden";

let secretNumber = Math.trunc(Math.random()*20)+1;
let messageNumber = Number(document.querySelector('.number').value = secretNumber);
let score = 20;
    let buttonI = document.querySelector('.check');
    buttonI.addEventListener('click', function(){
    let messageGuess = Number(document.querySelector('.guess').value);   
    let anime =  document.querySelector("main");
    anime = 1;
    if(anime > 0){
        document.querySelector("main").classList.toggle("active");
        // console.log(`jump ${anime.length}`)    
    }
    if(!messageGuess){
        document.querySelector('.message').textContent='⚔ Number Only';
        document.querySelector('.score').textContent=score;
        document.querySelector('.again').textContent='Retry Again 💞';   
    }else if(messageGuess === messageNumber){
        score++; 
        document.querySelector('.message').textContent='🎉 You Guessed!';
        document.querySelector('.highscore').textContent=score++;
        document.querySelector('.again').textContent='Retry Again 💞';
        document.body.style.backgroundColor = "Purple";
        document.querySelector('.number').style.backgroundColor="DarkBlue";
        document.querySelector('.check').style.backgroundColor="DarkBlue";
        document.querySelector('.again').style.backgroundColor="DarkBlue";
        document.querySelector("main").classList.toggle("jump");
        el.style.visibility="visible";
        document.querySelector('.number').textContent=messageNumber; 
    }else if(messageGuess < messageNumber){
        score--;
        document.querySelector('.message').textContent='To Low ⛔';
        document.querySelector('.score').textContent=score;
        document.querySelector('.highscore').textContent=score--;
        document.querySelector('.again').textContent='Retry Again 💞';
    }else if(messageGuess > messageNumber){
        score--;
        document.querySelector('.message').textContent='To High ⛔';
        document.querySelector('.score').textContent=score;
        document.querySelector('.highscore').textContent=score--;
        document.querySelector('.again').textContent='Retry Again 💞';
    }
})
