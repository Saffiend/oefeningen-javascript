function printHelloWorld() {
  console.log("Hello, world!");
}
printHelloWorld();

let num = 7
function doubleNumber(num) {
  return num * 2;
}
console.log(doubleNumber(num));

let a = 5
let b = 5
function sumTwoNumbers(a, b) {
  return a + b;
}
console.log(sumTwoNumbers(a, b))


function toUpperCase(str) {
    console.log(str.toUpperCase());
}
let str = 'let string';
toUpperCase(str)


function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(num))

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function getCurrentDateTime() {
  return new Date();
}

function calculateAverage(x, y, z) {
  return (x + y + z) / 3;
}

function getFirstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}

function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}
