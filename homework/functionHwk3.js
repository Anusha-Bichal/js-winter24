//1 Write a function that takes in an age (number). Check if the age is greater than or equal to 65 or not. If it is equal to or greater than 65 return the string “Special discount” otherwise return “Not Allowed”.
function age(number) {
  let n = number;
  if (n >= 65) {
    console.log("special discount");
  } else {
    console.log("Not Allowed");
  }
  return n;
}
console.log(age(65));
console.log("------------------------------------------------");

/*2. Write a function that takes in an array of numbers and use the forEach() or map()
to multiply every number by 100. The function should return a new array with the
result. The original array should not be mutated.*/
let arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.map((element) => {
  return element * 100;
});

console.log(newArr);
console.log(arr);
console.log("------------------------------------------------");

/*3. Write a function that takes in an array of numbers and use the forEach() or map()
to multiply every number by 100 if the array provided to the function has a length
greater than 5. The function should return a new array with the result. The
original array should not be mutated.*/
let ary = [1, 2, 3, 4, 5];
const newA = ary.map((element) => {
  if (ary.length >= 5) return element * 100;
  else return undefined;
});
console.log(newA);
console.log(ary);
console.log("------------------------------------------------");

/*4. Write a function that takes in an array of numbers and uses the forEach() or
map() to multiply every number by 100 only if the number is even - if the number
is odd then it will return the original number . The function should return a new
array with the result. The original array should not be mutated.*/

function evenNum(arr) {
  const result = [];
  arr.forEach((num) => {
    if (num % 2 == 0) {
      result.push(num * 100);
    } else {
      result.push(num);
    }
  });
  return result;
}
let num = [1, 2, 3, 4, 5, 6, 7];
const multiNum = evenNum(num);
console.log(multiNum);
console.log("----------------------------------------------");
/*5. Write a function that takes in this array as input [154, 657, 564, 561, 154, 678,
100, 154] and returns the number of times 154 occurred or existed in that array.*/
function numCount(numAry) {
  let count = 0;
  numAry.forEach((element) => {
    if (element == 154) {
      count += 1;
    }
  });
  return count;
}

let element = [154, 657, 564, 561, 154, 678, 100, 154];
let occuredNum = numCount(element);
console.log(occuredNum);
console.log("------------------------------------------------");

/*6.Write a function that takes in an argument function checkType(input) - if the input
is an array or javascript object then it returns the string “object” - otherwise it will
return the string “It’s something else”.*/
function checkType(input) {
  if (Array.isArray(input) || typeof input === "object") {
    return "Object";
  } else return "it is something else";
}

console.log(checkType([1, 2, 3]));
console.log(checkType("Hello"));
