/* Create a isPalindrome function that takes a string
    that when it reads the string either forwards or backwards the same word
    then the function returns true ex. "mom" or "racecar". 
    If read not the same word ex. "robot", then return false.
*/

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string 
  const reversedWord = word.split('').reverse().join('');
  // compare reversed string to the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here

  reverse the input string 

  if the input equals the reversed string
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  
  create an array from the input string
  reverse the array
  create a string from the reversed array 
  compare reverse string to the input
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
