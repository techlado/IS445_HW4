function countVowels(word) {
    // Convert word to lowercase to make case insensitive
    word = word.toLowerCase();
    
    let vowelCount = 0;
    
    // Find vowels
    for (let char of word) {
        if (['a', 'e', 'i', 'o', 'u', 'y'].includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

function isPalindrome(word) {
    // Convert word to lowercase to make case insensitive
    word = word.toLowerCase();
    
    // Initialize variables for start and end indices of word
    let start = 0;
    let end = word.length - 1;
    
    // Iterate through word using a for loop
    for (let i = 0; i < Math.floor(word.length / 2); i++) { // Math.floor() to round down to nearest int
        // Check if the characters at start and end are equal
        if (word[start] !== word[end]) {
            return false; // Not a palindrome
        }
        // Move start index forward and end index backward
        start++;
        end--;
    }
    
    // If loop completes without returning false, word is a palindrome
    return true;
}

// Ask the user for input
let userInput = prompt("Enter a word:");

// Call the functions to compute the required values
let vowelCount = countVowels(userInput);
let palindrome = isPalindrome(userInput);

// Display the results
if (palindrome) {
    console.log(`${userInput} contains ${vowelCount} vowels and is a palindrome.`);
} else {
    console.log(`${userInput} contains ${vowelCount} vowels and is not a palindrome.`);
}
