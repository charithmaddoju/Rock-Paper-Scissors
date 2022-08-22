function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice===0){
        return 'ROCK';
    }
    else if(choice===1){
        return 'PAPER';
    }
    else{
        return 'SCISSORS';
    }
}
console.log(getComputerChoice());

function playRound(playerSelection,computerSelection){
    if(playerSelection.toUpperCase()==='ROCK' && computerSelection==='SCISSORS'){
        return `YOU WIN ! ${playerSelection} beats ${computerSelection}`;
    }

    else if(playerSelection.toUpperCase()==='PAPER' && computerSelection==='ROCK'){
        return `YOU WIN ! ${playerSelection} beats ${computerSelection}`;
    }

    else if(playerSelection.toUpperCase()==='SCISSORS' && computerSelection==='PAPER'){
        return `YOU WIN ! ${playerSelection} beats ${computerSelection}`;
    }

    else if(playerSelection.toUpperCase()===computerSelection){
        return 'THATS A DRAW !';
    }

    else{
        return `YOU LOSE ! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));