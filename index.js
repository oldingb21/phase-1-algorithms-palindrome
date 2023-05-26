function isPalindrome(word) {
  if (word.toLowerCase() === word.split('').reverse().join('').toLowerCase()) {
    return true;
  }
  else {return false}
}

/* 
  Function is a string a Palindrome ("string")
    if string=palindrome(in other words string reversed)
      return true
    else return false
*/

/*
  In isPalindrome I took a string and compared it to itself reversed
  using a few methods to do so, the split('') method to create an array of 
  charachters, the reverse() method to reverse the array, and then the join('')
  method to turn the array back into a string and then compared the new
  string with the given string both in lowercase letters to account for 
  any capitalization in the string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Level"));

  console.log("")

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Faulty"));
}

module.exports = isPalindrome;
