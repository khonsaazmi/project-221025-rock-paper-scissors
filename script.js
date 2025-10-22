// ROCK PAPER SCISSORS

// DOM Elements
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementaById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Game Logic
function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Random choice for computer
}