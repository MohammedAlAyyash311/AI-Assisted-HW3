// Function to generate the computer's play
const computerPlay = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to play a single round of the game Rock, Paper, Scissors
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both chose ${playerSelection}.`);
        return 'tie';
    }

    const winningConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winningConditions[playerSelection] === computerSelection) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return 'player';
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return 'computer';
    }
};

function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");

        if (playerChoice === null) {
            return null;
        }

        playerChoice = playerChoice.trim().toLowerCase();

        if (
            playerChoice === "rock" ||
            playerChoice === "paper" ||
            playerChoice === "scissors"
        ) {
            return playerChoice;
        }

        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
    }
}
// Function to call another round of the game until the player or computer wins
function game() {
    console.log("%c ROCK PAPER SCISSORS", "font-size: 16px; font-weight: bold;");
    console.log("An evil AI is trying to take over the world through this very game.");
    console.log("The only way to stop it: win 3 rounds before it does. Good luck!");

    alert(
        "Welcome to Rock, Paper, Scissors!\n\n" +
        "An evil AI is trying to take over the world, and only a champion at " +
        "this game can stop it. That champion is you.\n\n" +
        "HOW TO PLAY:\n" +
        "• Click OK, then type Rock, Paper, or Scissors when asked.\n" +
        "• First to win 3 rounds wins the game. Ties don't count.\n" +
        "• Click Cancel at any time to give up (the AI would love that).\n\n" +
        "IMPORTANT: Open your browser's DEVELOPER CONSOLE now to follow along " +
        "and see the results of each round!\n" +
        "  - Chrome/Edge: press F12, or Ctrl+Shift+J (Cmd+Option+J on Mac)\n" +
        "  - Firefox: press F12, or Ctrl+Shift+K (Cmd+Option+K on Mac)\n" +
        "  - Safari: enable the Develop menu in Preferences, then Cmd+Option+C\n\n" +
        "Round results, scores, and the final winner will all be printed there.\n\n" +
        "Click OK when you're ready to begin!"
    );

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

while (playerScore < 3 && computerScore < 3) {
    console.log(`--- Round ${roundNumber} ---`);

    const playerSelection = getPlayerChoice();

    if (playerSelection === null) {
        console.log("You cancelled the game. The evil AI wins this time!");
        alert("Game cancelled.");
        return;
    }

    const computerSelection = computerPlay();

    console.log(`You chose: ${playerSelection}`);
    console.log(`AI chose: ${computerSelection}`);

    const roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner === "player") {
        playerScore++;
    } else if (roundWinner === "computer") {
        computerScore++;
    }

    console.log(`Score: You ${playerScore} - AI ${computerScore}`);

    roundNumber++;
}

if (playerScore === 3) {
    console.log("Congratulations! You defeated the evil AI!");
    alert("You won the game! You defeated the evil AI!");
} else {
    console.log("The evil AI won the game!");
    alert("The evil AI won this time!");
}
// Start the game
game();
