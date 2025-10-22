// ROCK PAPER SCISSORS

// DOM Elements
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Game Logic
function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Random choice for computer
    let result = ""; // Result of the game

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!"; // Tie condition
    }
    else {
        // Determine win or lose
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"; // Conditional statement
                break; // Missing break added
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}