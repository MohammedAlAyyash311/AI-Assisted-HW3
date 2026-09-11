// Function to generate the computer's play
const computerPlay = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to play a single round of Rock, Paper, Scissors
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const emojis = {
        rock: "🪨",
        paper: "📄",
        scissors: "✂️"
    };

    if (playerSelection === computerSelection) {
        const message =
            `🤝 It's a tie! You both chose ` +
            `${emojis[playerSelection]} ${playerSelection}.`;

        console.log(message);
        return "tie";
    }

    const winningConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winningConditions[playerSelection] === computerSelection) {
        const message =
            `🎉 You win! ${emojis[playerSelection]} ${playerSelection} ` +
            `beats ${emojis[computerSelection]} ${computerSelection}.`;

        console.log(message);
        return "player";
    } else {
        const message =
            `🤖 You lose! ${emojis[computerSelection]} ${computerSelection} ` +
            `beats ${emojis[playerSelection]} ${playerSelection}.`;

        console.log(message);
        return "computer";
    }
};

function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt(
            "⚔️ Choose your weapon!\n\n" +
            "🪨 Rock\n" +
            "📄 Paper\n" +
            "✂️ Scissors\n\n" +
            "Enter Rock, Paper, or Scissors:"
        );

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

        alert(
            "🚨 Invalid choice!\n\n" +
            "Please enter Rock, Paper, or Scissors."
        );
    }
}

// Function to call another round until the player or computer wins
function game() {
    console.clear();

    console.log(
        "%c🪨 📄 ✂️ ROCK PAPER SCISSORS",
        "font-size: 16px; font-weight: bold; color: #00bfff;"
    );

    console.log(
        "🤖 An evil AI is trying to take over the world through this very game."
    );

    console.log(
        "🌍 The only way to stop it: win 3 rounds before it does. Good luck!"
    );

    alert(
        "🪨 📄 ✂️ Welcome to Rock, Paper, Scissors!\n\n" +
        "🤖 An evil AI is trying to take over the world, and only a champion at " +
        "this game can stop it. That champion is you.\n\n" +
        "🎮 HOW TO PLAY:\n" +
        "• Click OK, then type Rock, Paper, or Scissors when asked.\n" +
        "• The first to win 3 rounds wins the game.\n" +
        "• Ties don't count.\n" +
        "• Click Cancel at any time to give up. 🏳️\n\n" +
        "💻 IMPORTANT: Open your browser's DEVELOPER CONSOLE now to follow along " +
        "and see the results of each round!\n\n" +
        "• Chrome/Edge: F12 or Ctrl+Shift+J\n" +
        "• Firefox: F12 or Ctrl+Shift+K\n" +
        "• Mac: Cmd+Option+J\n\n" +
        "Round results, scores, and the final winner will also appear in alerts.\n\n" +
        "Click OK when you're ready to begin! ⚔️"
    );

    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

    while (playerScore < 3 && computerScore < 3) {
        console.log(`\n⚔️ --- Round ${roundNumber} ---`);

        const playerSelection = getPlayerChoice();

        if (playerSelection === null) {
            console.log(
                "🏳️ You cancelled the game. The evil AI wins this time!"
            );

            alert(
                "🏳️ Game cancelled!\n\n" +
                "🤖 The evil AI wins this time!"
            );

            return;
        }

        const computerSelection = computerPlay();

        console.log(`👤 You chose: ${playerSelection}`);
        console.log(`🤖 AI chose: ${computerSelection}`);

        const roundWinner = playRound(
            playerSelection,
            computerSelection
        );

        let roundMessage;

        if (roundWinner === "player") {
            playerScore++;
            roundMessage = "🎉 You won this round!";

            console.log("🤖 AI: That must have been beginner's luck!");
        } else if (roundWinner === "computer") {
            computerScore++;
            roundMessage = "🤖 The evil AI won this round!";

            console.log("🤖 AI: The world will soon be mine!");
        } else {
            roundMessage = "🤝 This round was a tie!";

            console.log("🤖 AI: Interesting... we made the same choice.");
        }

        console.log(
            `🏆 Score: You ${playerScore} - ${computerScore} AI`
        );

        alert(
            `⚔️ ROUND ${roundNumber} RESULT\n\n` +
            `👤 You chose: ${playerSelection}\n` +
            `🤖 AI chose: ${computerSelection}\n\n` +
            `${roundMessage}\n\n` +
            `🏆 SCORE\n` +
            `You ${playerScore} - ${computerScore} AI`
        );

        if (playerScore === 2 && computerScore === 2) {
            console.log(
                "🔥 Final showdown! The winner of the next non-tie round wins!"
            );

            alert(
                "🔥 FINAL SHOWDOWN!\n\n" +
                "The score is tied 2 - 2.\n" +
                "The winner of the next non-tie round wins the game!"
            );
        } else if (playerScore === 2 && computerScore < 2) {
            console.log(
                "🌟 Match point! Win one more round to save the world!"
            );
        } else if (computerScore === 2 && playerScore < 2) {
            console.log(
                "🚨 Danger! The AI only needs one more win!"
            );
        }

        roundNumber++;
    }

    if (playerScore === 3) {
        console.log(
            "%c🏆 Congratulations! You defeated the evil AI! 🌍",
            "font-size: 16px; font-weight: bold; color: green;"
        );

        alert(
            "🏆 YOU WON THE GAME! 🎉\n\n" +
            `Final score: You ${playerScore} - ${computerScore} AI\n\n` +
            "🌍 You defeated the evil AI and saved the world!"
        );
    } else {
        console.log(
            "%c🤖 The evil AI won the game! 💀",
            "font-size: 16px; font-weight: bold; color: red;"
        );

        alert(
            "🤖 THE EVIL AI WON! 💀\n\n" +
            `Final score: You ${playerScore} - ${computerScore} AI\n\n` +
            "🌍 The world is in danger—but you can try again!"
        );
    }
}

// Start the game
do {
    game();
} while (
    confirm(
        "🔄 Would you like to play again?\n\n" +
        "Click OK for a rematch or Cancel to exit."
    )
);

console.log("👋 Thanks for playing!");
alert("👋 Thanks for playing! See you next time.");