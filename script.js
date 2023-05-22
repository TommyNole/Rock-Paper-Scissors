const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const statusText = document.querySelector('#status-text');
const choiceBtns = document.querySelectorAll('.user-choices');
const controlsPanel = document.querySelector('.controls');
const endOfGamePanel = document.querySelector('.endofgame');
const announceWinner = document.querySelector('#announce-winner');
const playAgainBtn = document.querySelector('#play-again');
let playerChoice;
let cpuChoice;
let playerWins = 0;
let computerWins = 0;

endOfGamePanel.style.display = 'none';

choiceBtns.forEach(choiceBtn => choiceBtn.addEventListener('click', () => {
    playerChoice = choiceBtn.id;
    cpuChoice = computerChoice();
    checkResult(playerChoice, cpuChoice);
    checkForWin();
}));
        
function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkResult(playerChoice, cpuChoice) { 
    if (playerChoice === 'rock' && cpuChoice === 'scissors') {
        statusText.textContent = 'You win! ROCK beats SCISSORS';
        playerScore.textContent++;
        playerWins++;
    } else if (playerChoice === 'scissors' && cpuChoice === 'paper') {
        statusText.textContent = 'You win! SCISSORS beats PAPER';
        playerScore.textContent++;
        playerWins++;
    } else if (playerChoice === 'paper' && cpuChoice === 'rock') {
        statusText.textContent = 'You win! PAPER beats ROCK';
        playerScore.textContent++;
        playerWins++;
    } else if (playerChoice === cpuChoice) {
        statusText.textContent = 'It\'s a TIE!';
    } else {
        statusText.textContent = `You lose! ${cpuChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}.`;
        computerScore.textContent++;
        computerWins++;
    }
}

function checkForWin() {
    if (playerWins === 5) {
        announceWinner.textContent = 'YOU WON THE GAME!';
        endOfGamePanel.style.display = 'block';
        controlsPanel.style.display = 'none';
    } else if (computerWins === 5) { 
        announceWinner.textContent = 'YOU LOST THE GAME!';
        endOfGamePanel.style.display = 'block';
        controlsPanel.style.display = 'none';
    }
        
}

playAgainBtn.addEventListener('click', () => { 
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerWins = 0;
    computerWins = 0;
    statusText.textContent = 'Make your choice!';
    endOfGamePanel.style.display = 'none';
    controlsPanel.style.display = 'flex';
});


    
