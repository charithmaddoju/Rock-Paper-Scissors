const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');

let playerSelection;
let computerSelection;
let result;

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();

        playerText.textContent = `Player : ${playerSelection}`;
        computerText.textContent = `Computer : ${computerSelection}`;
        resultText.textContent = playRound(playerSelection,computerSelection);
    })
})


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

    if(playerSelection === computerSelection){
        return 'Draw!';
    }

    else if(computerSelection === 'ROCK'){
        
        return (playerSelection === 'PAPER') ? "You Win!" : "You Lose!";
    }

    else if(computerSelection === 'PAPER'){
        
        return (playerSelection === 'SCISSORS') ? "You Win!" : "You Lose!";
    }
    
    else if(computerSelection === 'SCISSORS'){

        return (playerSelection === 'ROCK') ? "You Win!" : "You Lose!";
    }
}


