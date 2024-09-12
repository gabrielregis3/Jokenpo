"use strict";
const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch (playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    if (playerDisplay && computerDisplay && resultDisplay && playerScoreDisplay && computerScoreDisplay) { // Guarantees that nothing is null
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;
        resultDisplay.classList.remove("greenText", "redText");
        switch (result) {
            case "YOU WIN!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore.toString();
                break;
            case "YOU LOSE!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore.toString();
                break;
        }
    }
}
