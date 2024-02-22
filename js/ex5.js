const words = [];

while (true) {
    let word = prompt("Enter a word (type 'stop' to end):");
    
    if (word.toLowerCase() === "stop") {
        if (words.length === 0) {
            console.log("No words to display, 'stop' was the first word entered.");
        } else {
            console.log("You entered the following words:");
            for (let i = 0; i < words.length; i++) {
                console.log(words[i] + '\n');
            }
        }
        break;
    } else {
        words.push(word);
    }
}