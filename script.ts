const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.querySelector<HTMLDivElement>("#playerDisplay");
const computerDisplay = document.querySelector<HTMLDivElement>("#computerDisplay");
const resultDisplay = document.querySelector<HTMLDivElement>("#resultDisplay");
const playerScoreDisplay = document.querySelector<HTMLDivElement>("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector<HTMLDivElement>("#computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice: string) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {

        result = "IT'S A TIE!";

    } else {

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