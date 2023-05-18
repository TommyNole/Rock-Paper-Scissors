greetUser();
playGame();
//This function prompts for the player choice and adds that choice to a variable
function getPlayerChoice() {
    let isNotValid = true;
    let userChoice = null;
    
    do {
        let userSelection = prompt("Enter your selection: 1 - Rock | 2 - Paper | 3 - Scissors");
    
            if (userSelection === null || userSelection === '') {
                alert("Invalid response. Please try again");
            } else if (userSelection === "1" || userSelection.toLowerCase() === "rock") {
                isNotValid = false;
                return userChoice = "rock";
            } else if (userSelection === "2" || userSelection.toLowerCase() === "paper") {
                isNotValid = false;
                return userChoice = "paper";
            } else if (userSelection === "3" || userSelection.toLowerCase() === "scissors") {
                isNotValid = false;
                return userChoice = "scissors";
            } else {
                alert("Not a valid choice. Please try again.");
            }
        } while (isNotValid);
}

function getComputerChoice() {
        let compOptions = ["rock", "paper", "scissors"];
        let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
        return compChoice;
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        playRound();
        
    }
    
    if (playerWins > computerWins) {
        alert(`You Won the Game! The score was: You: ${playerWins} | Computer: ${computerWins}`);
    } else if (playerWins < computerWins) {
        alert(`You Lost the Game! The score was: You: ${playerWins} | Computer:${computerWins}`);
    } else {
        alert(`You Tied the Game! The score was: You: ${playerWins} | Computer:${computerWins}`);
    }
    
    function playRound() {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        
    
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            alert("You Win!");
            playerWins++;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            alert("You Win!");
            playerWins++;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            alert('You Win!');
            playerWins++;
        } else if (playerSelection === computerSelection) {
            alert('Its a Tie!');
        } else {
            alert('You Lose!');
            computerWins++;
        }

        console.log(`You: ${playerSelection}`, " | ", `Computer: ${computerSelection}`);
        console.log(`The score is: You: ${playerWins} | Computer: ${computerWins}`);
    }
}

function greetUser() {

    alert("Hi. Welcome to Rock Paper Scissors. The first one to 5 wins the game. Click OK when you're ready to begin");
}
