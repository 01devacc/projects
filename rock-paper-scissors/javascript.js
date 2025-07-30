let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;
let round = 0;
let maxRounds = 5;
let gameEnded = false;

let buttons = document.querySelectorAll('button')


function getComputerChoice(number) {
    let choice = getRandomInt(number);

    return ['rock', 'paper', 'scissors'][choice];
}


function getRandomInt(int) {
    return Math.floor(Math.random() * int)
}



buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (gameEnded) {
            return;
        }

        if (round >= maxRounds) {

            console.log('Game over.')
            gameEnded = true;
            return;
        }

        humanSelection = button.textContent.toLowerCase();
        computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);
       
        round ++;

        if (round === maxRounds) {
            console.log(`Final score -- You: ${humanScore}, Computer: ${computerScore}`)
            
            if (humanScore > computerScore) {
                console.log('You win the game!');
            } else if (computerScore > humanScore) {
                console.log('You lost the game!');
            } else {
                console.log("The game ended in a tie!")
            }
        }   
    })
})




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

    } else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore += 1;
        } else {
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        }

    } else {
        console.log('Select an option.');
    }
}

function logScore() {
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}


// function reassignSelections() {
//     computerSelection = getComputerChoice(3);
//     humanSelection = getHumanChoice();
// }

// let counter = 0;

// while (counter < 5) {
//     reassignSelections();
//     computerSelection = 'changed';
//     humanSelection = '';
//     counter ++;
// }

