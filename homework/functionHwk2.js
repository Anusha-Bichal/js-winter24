//1. Factorial Calculation: Write a function calculateFactorial(n) that takes a number n as input and returns the factorial of n.
function calculateFactorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
calculateFactorial(5);

//2.Array Sum: Write a function sumArray(arr) that takes an array of numbers arr as input and returns the sum of all the numbers in the array.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
sumArray([1, 2, 3, 4, 5, 6]);

//3. Reverse String: Write a function reverseString(str) that takes a string str as input and returns the reverse of the string.
function reverseString(str) {
  let stringWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringWord = stringWord + str[i];
  }
  console.log(stringWord);
}

reverseString("Anusha");

//4.Write a function countVowels(str) that takes a string str as input and returns the number of vowels (a, e, i, o, u) in the string.
function countVowels(str) {
  let count = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count += 1;
    }
  }
  console.log(count);
}
countVowels("aeiou");
