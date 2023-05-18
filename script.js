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

// let playerChoice = getPlayerChoice();

// console.log(playerChoice);