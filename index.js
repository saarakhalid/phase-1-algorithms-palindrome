// index.js

// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Convert the input word to lowercase and remove spaces and special characters
  const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');

  // Create a reversed version of the cleaned word
  const reversedWord = cleanedWord.split('').reverse().join('');

  // Compare the cleaned word with its reversed version
  return cleanedWord === reversedWord;
}

// You can add your own custom tests here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

/* 
  Add your pseudocode here
  Function isPalindrome:
  1. Convert the input word to lowercase.
  2. Remove spaces and special characters from the word.
  3. Create a reversed version of the cleaned word.
  4. Compare the cleaned word with its reversed version.
  5. If they are equal, return true; otherwise, return false.

*/

/*
  Add written explanation of your solution here
  The isPalindrome function takes a word as input. It first converts the word to lowercase and removes spaces and special characters. Then, it creates a reversed version of the cleaned word and compares it with the original cleaned word. If the cleaned word and its reversed version are the same, the function returns true, indicating that the word is a palindrome. Otherwise, it returns false.

*/

// Export the isPalindrome function
module.exports = isPalindrome;

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}
