const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const newGameBtn = document.getElementById("newGameBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

let secretNumber;
let attempts;

function startNewGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsDisplay.textContent = attempts;
    message.textContent = "Make your first guess!";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;

    guessInput.focus();
}

function checkGuess() {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === secretNumber) {
        message.textContent =
            `🎉 Correct! You guessed it in ${attempts} attempts.`;

        guessInput.disabled = true;
        guessBtn.disabled = true;
    } else if (guess < secretNumber) {
        message.textContent = "⬆️ Too low! Try a higher number.";
    } else {
        message.textContent = "⬇️ Too high! Try a lower number.";
    }

    guessInput.value = "";
    guessInput.focus();
}

guessBtn.addEventListener("click", checkGuess);

newGameBtn.addEventListener("click", startNewGame);

guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

startNewGame();