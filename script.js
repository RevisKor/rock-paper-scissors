const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const choice = prompt("What is your choice?: (rock - paper - scissors)");
    return choice.toLowerCase();
}

console.log(getHumanChoice());