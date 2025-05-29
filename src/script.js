"use strict";

function getReversedText(text) {
  return text.split("").reverse().join("");
}

function getCleanText(text) {
  return text.toLowerCase().replace(/[^a-zа-яїєґ0-9]/gi, "");
}

function isPalindrome(text) {
  const newWord = getCleanText(text);
  return newWord === getReversedText(newWord);
}
console.log(isPalindrome("A man, a plan, a canal--panama"));
console.log(isPalindrome("abcd1234"))