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
  ii) keeps score and reports winner or loser at the end.
  
  hint: for(let i = 0; i < 5; i++){

  }, might be needed.

my hints: 
i) create variables to hold computer score and user score initialized to 0; at stage 5.
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

function playRound(playerSelection,computerChoice){
    let winner = "";
    if((playerSelection == "rock" && computerChoice == "paper") || (playerSelection == "paper" && computerChoice == "scissors") || (playerSelection == "scissors" && computerChoice == "rock")){
        winner = "computer";
    }
    else if((playerSelection == "paper" && computerChoice == "rock") || (playerSelection == "scissors" && computerChoice == "paper") || (playerSelection == "rock" && computerChoice == "scissors")){
        winner = "you";
    }
    else{
        winner = 'none';
    }

    if(winner == "computer"){
        return `You lost, ${computerChoice} conquers ${playerSelection} any day!`;
    }
    else if(winner == "you"){
        return `You won, ${playerSelection} will beat ${computerChoice} even if it's asleep`;
    }
    return "Wow, it's a tie";
}



function game(){
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5;i++){
        playRound(playerSelection(),getComputerChoice());
        if(playRound(playerSelection(),getComputerChoice()) == `You lost, ${getComputerChoice()} conquers ${playerSelection()} any day!`){
            cpuScore++;
        }
        else if(playRound(playerSelection(),getComputerChoice()) == `You won, ${playerSelection()} will beat ${getComputerChoice()} even if it's asleep`){
            playerScore++;
        }
    }
    if(playerScore > cpuScore){
        return `Yay, you won with ${playerScore} against computer's ${cpuScore}`;
    }
    else if ( playerScore < cpuScore){
        return `Sorry, you lost by ${cpuScore - playerScore} since you only got ${playerScore}`;
    }
    else {
       return `It was a tie. You and the computer had ${playerScore} after 5 rounds`;
    }
}

game();
