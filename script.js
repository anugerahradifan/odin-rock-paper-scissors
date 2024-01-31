function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    let guess;
    switch (randNum) {
        case 0:
            guess = "rock";
            break;
        case 1:
            guess = "paper"
            break;
        case 2:
            guess = "scissor"
            break;
    }
    return guess;
}

function playRound() {
    let playerSelection = prompt('Choose Rock, Paper, or Scissor').toLowerCase();
    let computerSelection = getComputerChoice();
    let messageResult;
    let result;
    if (playerSelection == computerSelection){
        messageResult = `Draw! You both chose ${playerSelection}`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        messageResult = 'You lose! Paper beats rock';
        result = 0;
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        messageResult = 'You win! Rock beats scissor';
        result = 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        messageResult = 'You lose! Scissor beats paper';
        result = 0;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        messageResult = 'You win! Paper beats rock';
        result = 1;
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        messageResult = 'You lose! Rock beats scissor';
        result = 0;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        messageResult = 'You win! Scissor beats paper';
        result = 1;
    }
    console.log(messageResult)
    return result;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    result = playRound();
    if (result == 1) {
        playerScore += 1;
    } else if (result == 0) {
        computerScore += 1;
    };

    result = playRound();
    if (result == 1) {
        playerScore += 1;
    } else if (result == 0) {
        computerScore += 1;
    };

    result = playRound();
    if (result == 1) {
        playerScore += 1;
    } else if (result == 0) {
        computerScore += 1;
    };

    result = playRound();
    if (result == 1) {
        playerScore += 1;
    } else if (result == 0) {
        computerScore += 1;
    };

    result = playRound();
    if (result == 1) {
        playerScore += 1;
    } else if (result == 0) {
        computerScore += 1;
    };

    if (playerScore > computerScore) {
        result = `You win! You beat computer ${playerScore} times!`;
    } else if (playerScore < computerScore) {
        result = `You lose! Computer beats you ${computerScore} times!`;
    } else {
        result = `Draw! You both win ${playerScore} times!`;
    }
    console.log(result);
}
playGame();
