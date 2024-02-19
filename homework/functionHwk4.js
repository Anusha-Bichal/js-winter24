/*1. Find Maximum Value in an Array:
Write a function findMax(arr) that takes an array of numbers arr as input and
returns the maximum value in the array.*/
function findMax(arr) {
  let maxVal = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

let arr = [1, 2, 3, 4, 5];
console.log(findMax(arr));

/*Count Characters:
Write a function countCharacters(str, char) that takes a string str and a character
char as input and returns the number of times char appears in str.*/
function countCharacters(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  }
  return count;
}

let str = "anushaaa";
let char = "a";
console.log(countCharacters(str, char));

/*4. Remove Duplicates from an Array:
Write a function removeDuplicates(arr) that takes an array arr as input and
returns a new array with duplicate elements removed, preserving the original
order.*/
function removeDuplicates(array) {
  let finalArr = [];
  array.forEach((element) => {
    if (!finalArr.includes(element)) {
      finalArr.push(element);
    }
  });
  return finalArr;
}

let array = "anushaaaaaaaa";
console.log(removeDuplicates(array.split("")));

/*Concatenate Arrays:
Write a function concatArrays(arr1, arr2) that takes two arrays arr1 and arr2 as
input and returns a new array that concatenates the elements of both arrays.*/
function concatArrays(arr1, arr2) {
  let finalArray = [];
  finalArray = arr1 + arr2;
  return finalArray;
}

let arr1 = "anusha";
let arr2 = "bichal";
console.log(concatArrays(arr1, arr2));

/* Find Longest Word:
Write a function longestWord(sentence) that takes a sentence as input and
returns the longest word in the sentence.*/
function longestWord(sentence) {
  const wordsArray = sentence.split(" ");
  let longest = "";
  let maxLength = 0;
  wordsArray.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      longest = word;
    }
  });
  return longest;
}

const sentence = "Anusha is a talented girl";
console.log(longestWord(sentence));

/*Reverse Array:
Write a function reverseArray(arr) that takes an array arr as input and returns a
new array with the elements in reverse order.
Do not use the reverse() method.*/
function reverseArray(revarr) {
  let otherArr = [];
  for (let i = revarr.length - 1; i >= 0; i--) {
    otherArr.push(revarr[i]);
  }
  return otherArr;
}

let revarr = "pichi";
console.log(reverseArray(revarr));

/*Write a function isPalindrome(str) that takes a string str as input and returns true
if the string is a palindrome (reads the same forwards and backwards), and false
otherwise.*/
function isPalindrome(str2) {
  let newWord = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    newWord += str2[i];
  }
  if (newWord == str2) {
    return true;
  } else {
    return false;
  }
}
let str2 = "racecar";
console.log(isPalindrome(str2));
