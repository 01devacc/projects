let humanScore = 0;
let computerScore = 0;


function getComputerChoice(number) {
    let choice = getRandomInt(number);

    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
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

console.log(getComputerChoice(3))
console.log(getHumanChoice())