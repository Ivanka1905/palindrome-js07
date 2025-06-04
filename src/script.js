"use strict";

function isPalindrome(text, divide = "") {
  let newWord = text.toLowerCase().replace(/[\s\W]/g, divide);
  return (newWord === newWord.split(divide).reverse().join(divide));
}

console.log(isPalindrome("Go deliver a dare vile dog"));
console.log(isPalindrome("Was it a Cat I Saw?"));
console.log(isPalindrome("abcdefg123"));
console.log(isPalindrome("Repaper"));