function getcomputerSelection() {
    let randNum = Math.floor(Math.random() * 3);
    let guess;
    switch (randNum) {
        case 0:
            guess = "✊";
            break;
        case 1:
            guess = "✋"
            break;
        case 2:
            guess = "✌️"
            break;
    }
    return guess;
}

function playRound(playerSelection) {
    let computerSelection = getcomputerSelection();
    let resultMessage = document.querySelector('.first-section .first-container');
    let playerScore = document.querySelector('.first-section .score-container .score-box .score#player');
    let cpuScore = document.querySelector('.first-section .score-container .score-box .score#cpu');
    let playerSign = document.querySelector('.first-section .score-container .score-box .selection#player');
    let cpuSign = document.querySelector('.first-section .score-container .score-box .selection#cpu');

    if (playerSelection == computerSelection){
        resultMessage.textContent = `Draw!`;
    } else if (playerSelection == '✊' && computerSelection == '✋') {
        resultMessage.textContent = 'You lost! Paper beats rock';
        tempCpuScore++;
    } else if (playerSelection == '✊' && computerSelection == '✌️') {
        resultMessage.textContent = 'You won! Rock beats scissor';
        tempPlayerScore++;
    } else if (playerSelection == '✋' && computerSelection == '✌️') {
        resultMessage.textContent = 'You lost! Scissor beats paper';
        tempCpuScore++;
    } else if (playerSelection == '✋' && computerSelection == '✊') {
        resultMessage.textContent = 'You won! Paper beats rock';
        tempPlayerScore++;
    } else if (playerSelection == '✌️' && computerSelection == '✊') {
        resultMessage.textContent = 'You lost! Rock beats scissor';
        tempCpuScore++;
    } else if (playerSelection == '✌️' && computerSelection == '✋') {
        resultMessage.textContent = 'You won! Scissor beats paper';
        tempPlayerScore++;
    }

    playerSign.textContent = playerSelection;
    cpuSign.textContent = computerSelection;

    playerScore.textContent = `Player: ${tempPlayerScore}`;
    cpuScore.textContent = `CPU: ${tempCpuScore}`;

    let newButton = document.createElement("button");
    let container = document.querySelector('.first-section .main-container');
    newButton.id = 'reset';
    newButton.textContent = 'Play Again';
    newButton.addEventListener('click', function (e) {
        tempPlayerScore = 0;
        tempCpuScore = 0;
        resultMessage.textContent = 'Get ready!';
        playerSign.textContent = '❓';
        cpuSign.textContent = '❓';
        playerScore.textContent = `Player: ${tempPlayerScore}`;
        cpuScore.textContent = `CPU: ${tempCpuScore}`;
        container.removeChild(newButton);
    })

    if (tempCpuScore == 5 || tempPlayerScore == 5) {
        container.appendChild(newButton);
        // let selectionContainer = document.querySelector('.selection-container');
        // container.removeChild(selectionContainer);
        if (tempCpuScore == 5) {
            resultMessage.textContent = 'You lost the game!';
        } else if (tempPlayerScore == 5) {
            resultMessage.textContent = 'You won the game!'
        }
    }
}

let tempPlayerScore = 0;
let tempCpuScore = 0;

let buttons = document.querySelector('#buttons');
buttons.addEventListener('click', function (e) {
    let target = e.target;
    if (tempPlayerScore < 5 && tempCpuScore < 5) {
        switch (target.id) {
            case 'rock':
                console.log('Rock!');
                playRound('✊');
                break;
            
            case 'paper':
                console.log('Paper!');
                playRound('✋');
                break;

            case 'scissor':
                console.log('Scissor!');
                playRound('✌️');
                break;
        }
    }
}
)

