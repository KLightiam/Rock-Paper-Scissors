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

function playerSelection(){
    let userInput = prompt("It's your turn to play: Rock Paper Scissors. What do you choose? Rock,Paper or Scissors").toLowerCase();
    return userInput;
}

let winner = "";
let playerScore = 0;
let cpuScore = 0;
let count = 0;

function playRound(playerSelection,computerChoice){
  
    
    if((playerSelection == "rock" && computerChoice == "paper") || (playerSelection == "paper" && computerChoice == "scissors") || (playerSelection == "scissors" && computerChoice == "rock")){
        winner = `You lost this round, ${computerChoice} conquers ${playerSelection} any day!`;
        console.log(winner);
        cpuScore++;
        count++;
        console.log(`User:${playerScore}  Computer:${cpuScore}`);
    }
    else if((playerSelection == "paper" && computerChoice == "rock") || (playerSelection == "scissors" && computerChoice == "paper") || (playerSelection == "rock" && computerChoice == "scissors")){
        winner = `You won this round, ${playerSelection} will beat ${computerChoice} even if it's asleep`;
        console.log(winner);
        count++;
        playerScore++;
        console.log(`User:${playerScore}  Computer:${cpuScore}`);

    }
    else{
        count++;
        winner = `It's a tie on this round`;
        console.log(winner);
        console.log(`User:${playerScore}  Computer:${cpuScore}`)
    }

    if((count == 5) && (playerScore > cpuScore)){
        console.log(`Yay, you won with ${playerScore} against computer's ${cpuScore}`);
    }
    else if((count == 5) && (playerScore < cpuScore)){
        console.log(`Sorry, you lost by ${cpuScore - playerScore} since you only got ${playerScore} vs computer's ${cpuScore}`);
    }
    else if((count == 5) && (playerScore == cpuScore)){
        console.log(`It was a tie. You and the computer had ${playerScore} after 5 rounds`)
    }
}


function game(){
    for(let i=0;i<5;i++){
        playRound(playerSelection(),getComputerChoice());
    }
}

game();
