let playerWins = 0;
let computerWins = 0;

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



function playRound(playerSelection,computerSelection){

    if(playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS'){
        playerWins += 1;
        return `YOU WON ! ROCK BEATS SCISSORS`;
    }

    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK'){
        playerWins += 1;
        return `YOU WON ! PAPER BEATS ROCK`
    }

    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER'){
        playerWins += 1;
        return `YOU WON ! SCISSORS BEATS PAPER`;
    }
    else if(playerSelection.toUpperCase() === computerSelection){
        return `ITS A DRAW`;
    }
    else{
        computerWins += 1;
        return `COMPUTER WINS ! ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    }
}

// let playerSelection = window.prompt('ENTER YOUR CHOICE ! ROCK/PAPER/SCISSORS :');
let computerSelection = getComputerChoice();


function game(){
    for(let i = 0; i<5 ; i++){
        let message = window.prompt("ROCK // PAPER // SCISSORS :?");
        alert(playRound(message.toUpperCase(),computerSelection));
    }
    alert(`PlayerWins ${playerWins}, ComputerWins ${computerWins}`);
}

game();