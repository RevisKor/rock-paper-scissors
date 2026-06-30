const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const main = document.querySelector(".main");
const choiceRock = document.querySelector(".choiceRock");
const choicePaper = document.querySelector(".choicePaper");
const choiceScissors = document.querySelector(".choiceScissors");
const computerChoiceBox = document.querySelector(".getComputerChoice");

const results = document.createElement("div"); results.classList.add("results");
const roundWinner = document.createElement("div"); roundWinner.classList.add("roundWinner");
const gameInfo = document.createElement("div"); gameInfo.classList.add("gameInfo");
const gameWinner = document.createElement("div"); gameWinner.classList.add("gameWinner");
const restartButton = document.createElement("button"); restartButton.textContent = "Restart Game"; restartButton.classList.add("restartButton")

results.append(
    roundWinner,
    gameInfo,
    gameWinner,
    restartButton
);
main.appendChild(results);

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}.`;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
}

function handleChoice(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();

    computerChoiceBox.textContent = computerChoice;
    roundWinner.textContent = playRound(humanChoice, computerChoice);
    gameInfo.textContent =
        `Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        gameWinner.textContent = "🎉 You won the game!";
        restartButton.style.display = "block";
    }

    if (computerScore === 5) {
        gameWinner.textContent = "💻 Computer won the game!";
        restartButton.style.display = "block";
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;

    computerChoiceBox.textContent = "";
    roundWinner.textContent = "";
    gameWinner.textContent = "";
    gameInfo.textContent = "";

    restartButton.style.display = "none";
}

choiceRock.addEventListener("click", () => handleChoice("rock"));
choicePaper.addEventListener("click", () => handleChoice("paper"));
choiceScissors.addEventListener("click", () => handleChoice("scissors"));

restartButton.addEventListener("click", restartGame);