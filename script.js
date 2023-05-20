
let playerWins = 0;
let computerWins = 0;

// do {
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const statusText = document.querySelector('#status-text');
    const choiceBtns = document.querySelectorAll('.user-choices');
    let playerChoice;
    let cpuChoice;
    
    choiceBtns.forEach(choiceBtn => choiceBtn.addEventListener('click', () => {
        playerChoice = choiceBtn.id;
        cpuChoice = computerChoice();
        checkResult(playerChoice, cpuChoice);
    }));
            
    function computerChoice() {
        let choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }
    
    function checkResult(playerChoice, cpuChoice) { 
        if (playerChoice === 'rock' && cpuChoice === 'scissors') {
            statusText.textContent = 'You win! Rock beats scissors.';
            playerScore.textContent++;
            playerWins++;
        } else if (playerChoice === 'scissors' && cpuChoice === 'paper') {
            statusText.textContent = 'You win! Scissors beats paper.';
            playerScore.textContent++;
            playerWins++;
        } else if (playerChoice === 'paper' && cpuChoice === 'rock') {
            statusText.textContent = 'You win! Paper beats rock.';
            playerScore.textContent++;
            playerWins++;
        } else if (playerChoice === cpuChoice) {
            statusText.textContent = 'It\'s a tie!';
        } else {
            statusText.textContent = 'You lose! ' + cpuChoice + ' beats ' + playerChoice + '.';
            computerScore.textContent++;
            computerWins++;
        }
    }
// } while (playerWins < 5 && computerWins < 5);
    
// if (playerWins === 5) { 
//     statusText.textContent = 'You win the game!';
// } else {
//     statusText.textContent = 'You lose the game!';
// }


            
            