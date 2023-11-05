function getComputerChoice () {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    let computerSelection = Math.floor(Math.random()*3);

    switch (computerSelection) {
        case 0: {return 'rock'};
        break;
        case 1: {return 'paper'};
        break;
        case 2: {return 'scissors'};
    }
}



