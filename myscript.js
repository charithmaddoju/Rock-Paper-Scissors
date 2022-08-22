
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return 'ROCK';
    }
    else if(choice === 1){
        return 'PAPER'; 
    }
    else{
        return 'SCISSORS';
    }
}

console.log(getComputerChoice());


function playRound(playerSelection,computerSelection){
    
    if(playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS'){
        return `YOU WON ! ROCK BEATS SCISSORS`;
    }

    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK'){
        return `YOU WON ! PAPER BEATS ROCK`
    }

    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER'){
        return `YOU WON ! SCISSORS BEATS PAPER`;
    }
    else if(playerSelection.toUpperCase() === computerSelection){
        return `ITS A DRAW`;
    }
    else{
        return `COMPUTER WINS ! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerSelection = window.prompt('ENTER YOUR CHOICE ! ROCK/PAPER/SCISSORS :');
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));

