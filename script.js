function getComputerChoice () {
    let computerChoices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    return computerChoices[randomNumber];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            return "You win!"
        }
    else {
        return "Computer wins!";
    }

} 

function game () {
let playerWins = 0;
let computerWins = 0;
for (let i = 0; i < 5; i++) {
let computerSelection = getComputerChoice();
let playerSelection = String(prompt('Rock, paper or scissors?'));
let result = playRound(playerSelection.toLowerCase(), computerSelection);
console.log(`Round ${i+1}: ` + result);

if(result = "You win!") {
    playerWins++;
}
else if (result = "Computer wins!") {
    computerWins++;
}
}
getGameResults(computerWins, playerWins);
}

function getGameResults(computerWins, playerWins) {
    if (computerWins > playerWins) {
        console.log("YOU ARE THE WINNER. CONGRATS!");
    }
    else if (computerWins < playerWins) {
        console.log("Computer win the game :(");
    }
}

game();