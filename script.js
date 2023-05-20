playRound();


    
function playRound() {
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const statusText = document.querySelector('#status-text');
    const choiceBtns = document.querySelectorAll('.user-choices');
    let playerChoice;
    let cpuChoice;
             
    choiceBtns.forEach(choiceBtn => choiceBtn.addEventListener('click', () => {
        playerChoice = choiceBtn.id;
        cpuChoice = computerChoice();
        let result = checkResult(playerChoice, cpuChoice);
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
}

            
            // function checkResult(playerChoice, cpuChoice) {
            //     if (playerChoice === cpuChoice) { 
            //         statusText.textContent = 'It\'s a tie!';
            //     } else if (playerChoice === 'rock' && cpuChoice === 'scissors') { 
            //         statusText.textContent = 'You win! Rock beats scissors.';
            //         playerScore.textContent++;
            //     } else if (playerChoice === 'rock' && cpuChoice === 'paper') { 
            //         statusText.textContent = 'You lose! Paper beats rock.';
            //         computerScore.textContent++;
            //     } else if (playerChoice === 'paper' && cpuChoice === 'rock') { 
            //         statusText.textContent = 'You win! Paper beats rock.';
            //         playerScore.textContent++;
            //     } else if (playerChoice === 'paper' && cpuChoice === 'scissors') { 
            //         statusText.textContent = 'You lose! Scissors beats paper.';
            //         computerScore.textContent++;
            //     } else if (playerChoice === 'scissors' && cpuChoice === 'paper') { 
            //         statusText.textContent = 'You win! Scissors beats paper.';
            //         playerScore.textContent++;
            //     } else if (playerChoice === 'scissors' && cpuChoice === 'rock') { 
            //         statusText.textContent = 'You lose! Rock beats scissors.';
            //         computerScore.textContent++;
            //     }}
