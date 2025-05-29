"use strict";

function getReversedWord(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  let newWord = getReversedWord(word);
  return newWord.toLowerCase().replace(/\s+/g, '') === word.toLowerCase().replace(/\s+/g, '');
}
console.log(isPalindrome("Go deliver a dare vile dog"));
