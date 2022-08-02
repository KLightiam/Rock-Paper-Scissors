/*
1. create getComputerChoice fxn
2. getComputerChoice fxn returns either rock,paper or scissors .. hint; use math.random() * 10 and replace numbers with rock,paper,scissors
3.create playerSelection function that:
i)requests for input from user:
  a. input should be converted to lowercase
  b.input should be rock,paper or scissors

4. create function that takes;
 i) playerSelection and computer selection as arguments.
 ii) returns winner of round like: "you Lose! Paper beats Rock"

5. create game() fxn that 
  i)calls playRound() to play a 5 round game.
  ii) keeps score and reports winner or loser at the end. (correction: this applies to stage 4)
  
  hint: for(let i = 0; i < 5; i++){

  }, might be needed.

my hints: 
i) create variables to hold computer score and user score initialized to 0; at stage 5. (correction: this should be done right before stage 4)
ii) If user greater than cpu print winner else print loser.
*/

function getComputerChoice(){
    let cpuChoice = Math.floor(Math.random()*10);
    if(cpuChoice === 0 || cpuChoice === 3 || cpuChoice === 6 || cpuChoice === 9){
        cpuChoice = "rock"; 
    }
    else if(cpuChoice === 1 || cpuChoice === 4 || cpuChoice === 7){
        cpuChoice = "paper"; 
    }
    else{
        cpuChoice = "scissors"; 
    }
    return cpuChoice;
}

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');
let display = document.querySelector('div');

rockButton.addEventListener('click',playRound);
paperButton.addEventListener('click',playRound);
scissorsButton.addEventListener('click',playRound);

// function playerSelection(){
//     // let userInput = prompt("It's your turn to play: Rock Paper Scissors. What do you choose? Rock,Paper or Scissors").toLowerCase();
//     // let userInput = e.target.id;

//     return userInput;
// }

let winner = "";
let playerScore = 0;
let cpuScore = 0;
let count = 0;

function playRound(e){
    let userInput = e.target.id;

    function playerSelection(){
        return userInput;
    };
    playerSelection();
    getComputerChoice();

    if(playerScore == 5 || cpuScore == 5){
        playerScore = 0;
        cpuScore = 0;
        let startWord = ['Here We Go Again',"Let's Try Again!","All The Best","Hmm. You think you'll win? Let's see!"];
        let wordChoice = Math.floor(Math.random()*startWord.length);
        display.textContent = startWord[wordChoice];
    }
    
    if((playerSelection() == "rock" && getComputerChoice() == "paper") || (playerSelection() == "paper" && getComputerChoice() == "scissors") || (playerSelection() == "scissors" && getComputerChoice() == "rock")){
        winner = `You lost this round, ${getComputerChoice()} conquers ${playerSelection()} any day!`;
        // console.log(winner);
        cpuScore++;
        count++;
        display.textContent = `${winner} User:${playerScore}  Computer:${cpuScore}`;
    }
    else if((playerSelection() == "paper" && getComputerChoice() == "rock") || (playerSelection() == "scissors" && getComputerChoice() == "paper") || (playerSelection() == "rock" && getComputerChoice() == "scissors")){
        winner = `You won this round, ${playerSelection()} will beat ${getComputerChoice()} even if it's asleep`;
        // console.log(winner);
        count++;
        playerScore++;
        display.textContent = `${winner} User:${playerScore}  Computer:${cpuScore}`;

    }
    else{
        count++;
        winner = `It's a tie on this round`;
        // console.log(winner);
        display.textContent = `${winner} User:${playerScore}  Computer:${cpuScore}`;
    }

    if(playerScore == 5){
        display.textContent = `Yay, you won with ${playerScore} against computer's ${cpuScore} User:${playerScore}  Computer:${cpuScore}`;
    }
    else if(cpuScore == 5){
        display.textContent = `Sorry, you lost by ${cpuScore - playerScore} since you only got ${playerScore} vs computer's ${cpuScore} User:${playerScore}  Computer:${cpuScore}`;
    }
}


// function game(){
//     for(let i=0;i<5;i++){
//         playRound(playerSelection(),getComputerChoice());
//     }
// }

// game();
