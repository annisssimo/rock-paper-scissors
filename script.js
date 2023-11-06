function getComputerChoice () {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    let randomNumber = Math.floor(Math.random()*3);

    switch (randomNumber) {
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    switch (true) {
    case (playerSelection === computerSelection):
    return "no one is the winner";
    break;
    case (playerSelection === 'rock' && computerSelection === 'paper'):
    case (playerSelection === 'paper' && computerSelection === 'scissors'):
    case (playerSelection === 'scissors' && computerSelection === 'rock'):
    return "computer is the winner";
    break;
    case (playerSelection === 'paper' && computerSelection === 'rock'):
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
    return "yessss! you are lucky dude";
    break;
        default:
            return "oops. reload the page and try again...";
}
} 

const computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, paper or scissors?');

alert(playRound(playerSelection.toLowerCase(), computerSelection));

