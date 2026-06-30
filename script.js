const choices = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    // Returns an index from (0-2) to get a choice from choices
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    // Get the users choice then lowercase it 
    const choice = prompt("What is your choice?: (rock - paper - scissors)");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // 1. Guard Clause: Check for a tie first
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}.`;
    }

    // 2. Conditional logic with && and || for human winning combinations
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        // 3. Fallback: If it's not a tie and human didn't win, computer won
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");

    } else if (computerScore > humanScore){
        console.log("You lose the game!");
        
    } else {
        console.log("It's a tie");
    }
}