let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function updateScore(result) {
    if (result.includes("You win!")) {
        playerScore++;
    } else if (result.includes("Computer wins")) {
        computerScore++;
    }
}

function updateRoundCount() {
    roundCount++;
    if (roundCount === 5) {
        endGame();
    }
}

function endGame() {
    console.log("Game over!");
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Oops! Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);
    updateScore(result);
    updateRoundCount();
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => handleClick('rock'));

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => handleClick('paper'));

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
