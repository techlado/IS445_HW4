function guessNumberGame() {
    // Generate random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1; //Note: Math.floor() rounds down
    
    let attempts = 0;

    while (true) {
        // Prompt user to guess number
        let guess = parseInt(prompt("Guess the number between 1 and 100:"));

        attempts++;

        // Check if guess is correct
        if (guess === randomNumber) {
            console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
            break;
        } else if (guess < randomNumber) {
            console.log("Too low, guess again.");
        } else {
            console.log("Too high, guess again.");
        }
    }
}

// Call the function to start the game
guessNumberGame();
