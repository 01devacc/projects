let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice(3);

function getComputerChoice(number) {
    let choice = getRandomInt(number);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
        default:
            break;
    }
}


function getRandomInt(int) {
    return Math.floor(Math.random() * int)
}


function getHumanChoice() {
    return prompt("Enter your choice: ")
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("It's a tie!");

    } else if (humanChoice.toLowerCase() === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore += 1;
            } else {
                console.log("You win! Rock beats Scissors.");
                humanScore += 1;
            }

    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore += 1;
        } else {
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        }

    } else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore += 1;
        } else {
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        }
    }
}



playRound(humanSelection, computerSelection);
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
