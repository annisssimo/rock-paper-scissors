**Pseudocode**
Declare a function getComputerChoice, that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

Initialize 3 variables and set their values to ‘Rock’, ‘Paper’, ‘Scissors’

Generate random number between 0 and 2

case 0 return ‘Rock’
case 1 return ‘Paper’
case 2 return ‘Scissors’

Initialize a string variable playerSelection

A prompt to ask for players choice

Set playerSelection value to the inputted string

Declare a function playRound (playerSelection, computerSelection)

    case (playerSelection = computerSelection)
    return a string "no one is the winner"

    case ((playerSelection = ‘rock’ and computerSelection = ‘paper’)
    OR (playerSelection = ‘paper’ and computerSelection = ‘scissors’)
    OR (playerSelection = ‘scissors’ and computerSelection = ‘rock’)) return a string "computer is the winner"

    default return a string "player is the winner"

return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
