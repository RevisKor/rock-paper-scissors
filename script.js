const choices = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;

const choiceRock = document.createElement("button");
const choicePaper = document.createElement("button");
const choiceScissors = document.createElement("button");

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

// Event listeners
choiceRock.addEventListener("click", playRound("rock", computerChoice()));
choicePaper.addEventListener("click", playRound("paper", computerChoice()));
choiceScissors.addEventListener("click", playRound("scissors", computerChoice()));

