//1.Write a function called “add” that takes in 2 numbers and returns their added  value.
const add = (a, b) => a + b;
const sum = add(1, 2);
console.log(sum);

// 2.Write a function called “divide” that takes in 2 numbers and returns the divided  value.
function divide(b, c) {
  return b / c;
}
const div = divide(6, 3);
console.log(div);

//3.Write a function called “convert” that takes in a fahrenheit value and converts it into celsius.The formula for conversion is :  Celsius = (Fahrenheit  - 32) * 5/9
function convert(temp) {
  return ((temp - 32) * 5) / 9;
}
const temp = convert(90);
console.log("The temperature in celsius is", temp.toFixed(0), "degrees");

//4.Write a function called “divisibleBy55” that takes in a number and will return  either true or false to let us know whether the number is divisible by 55 or not.  If a number is divisible by 55 that means that there are 0 remainders.
function divisibleBy55(num) {
  const rem = num % 55;
  if (rem == 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}
divisibleBy55(110);
divisibleBy55(100);

//5.Write a function called “checkLength” that takes in a string and return a number  indicating the string’s length.
function checkLength(stringName) {
  console.log(stringName.length);
}
checkLength("Anu");

//6.Write a function called “concat” that takes in 2 strings and returns the  concatenated string. Ex: “cat” and “dog” will return “cat dog”.
function conCat(stringName1, stringName2) {
  console.log("The concatenated strings are", (stringName1 += stringName2));
}

conCat("cat", "dog");
