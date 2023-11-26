let playerScore = 0;
let computerScore = 0;

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
    winnerAnnouncement.textContent = result;
    playerScoreSign.textContent = `Player: ${playerScore}`;
    computerScoreSign.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        setTimeout(() => {
            endGame();
        }, 0);
    }
}

function endGame() {
    console.log("Game over!");
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        alert("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        alert("Oops! Computer wins the game!");
    } else {
        alert("It's a tie game!");
    }

    restartGame();
}

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSign.textContent = playerSelection;
    computerSign.textContent = computerSelection;
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    updateScore(result);
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSign.textContent = 'Player: 0'
    computerScoreSign.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    winnerAnnouncement.textContent = 'Choose your weapon';
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => handleClick('rock'));

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => handleClick('paper'));

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', () => restartGame());


const playerSign = document.querySelector('#player-sign');
const computerSign = document.querySelector('#computer-sign');
const playerScoreSign = document.querySelector('#player-score');
const computerScoreSign = document.querySelector('#computer-score');
const winnerAnnouncement = document.querySelector('#winner');