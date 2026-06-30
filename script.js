const choices = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;

const main = document.querySelector(".main");
const choiceRock = document.querySelector(".choiceRock");
const choicePaper = document.querySelector(".choicePaper");
const choiceScissors = document.querySelector(".choiceScissors");
const computerChoiceBox = document.querySelector(".getComputerChoice")

const results = document.createElement("div");
const roundInfo = document.createElement("div");
const roundWinner = document.createElement("div");
const gameInfo = document.createElement("div");
const gameWinner = document.createElement("div");
 
// Functions
function getComputerChoice() {
    // Returns an index from (0-2) to get a choice from choices
    return choices[Math.floor(Math.random() * 3)];
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

function handleChoice(humanChoice) {
    const computerChoice = getComputerChoice();

    computerChoiceBox.textContent = computerChoice;

    const result = playRound(humanChoice, computerChoice);

    roundWinner.textContent = result;

    results.appendChild(roundWinner);
    main.appendChild(results);
}

// Event listeners
choiceRock.addEventListener("click", () => {handleChoice("rock")});
choicePaper.addEventListener("click", () => {handleChoice("paper")});
choiceScissors.addEventListener("click", () => {handleChoice("scissors")});
