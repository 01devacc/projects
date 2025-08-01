let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;
let round = 0;
let maxRounds = 5;
let gameEnded = false;

let buttons = document.querySelectorAll('button')
let text = document.querySelector('.text')
let score = document.querySelector('.score')

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

            gameEnded = true;
            return;
        }

        humanSelection = button.textContent.toLowerCase();
        computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);
        score.innerText = `Score -- You: ${humanScore}, Computer: ${computerScore}`
        round ++;

        if (round === maxRounds) {
            score.innerText = `Final score -- You: ${humanScore}, Computer: ${computerScore}`
            
            if (humanScore > computerScore) {
                text.innerText = 'You win the game!';
            } else if (computerScore > humanScore) {
                text.innerText = 'You lost the game!';
            } else {
                text.innerText = "The game ended in a tie!"
            }
        }   
    })
})




function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        text.textContent = "It's a tie!";

    } else if (humanChoice.toLowerCase() === "rock") {
            if (computerChoice === "paper") {
                text.textContent = "You lose! Paper beats Rock.";
                computerScore += 1;
            } else {
                text.textContent = "You win! Rock beats Scissors.";
                humanScore += 1;
            }

    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "scissors") {
            text.textContent = "You lose! Scissors beats Paper.";
            computerScore += 1;
        } else {
            text.textContent = "You win! Paper beats Rock.";
            humanScore += 1;
        }

    } else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "rock") {
            text.textContent = "You lose! Rock beats Scissors.";
            computerScore += 1;
        } else {
            text.textContent = "You win! Scissors beats Paper.";
            humanScore += 1;
        }

    } else {
        text.textContent = 'Select an option.';
    }
}

// function logScore() {
//     console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
// }

