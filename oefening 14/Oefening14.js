function printHelloWorld() {
  console.log("Hello, world!");
}
printHelloWorld();


function doubleNumber(num) {
  return num * 2;
}
console.log(doubleNumber(7));


function sumTwoNumbers(a, b) {
  return a + b;
}
console.log(sumTwoNumbers(5, 5))


function toUpperCase(str) {
    console.log(str.toUpperCase());
}
let str = 'let string';
toUpperCase(str)


function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(7))

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
let arr = [1,2,3,4,5];
console.log(sumArray(arr));

function getCurrentDateTime() {
  return new Date();
}
console.log(getCurrentDateTime());

function calculateAverage(x, y, z) {
  return (x + y + z) / 3;
}
console.log(calculateAverage(10, 20, 30));


function getFirstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}

const firstAndLast = getFirstAndLast(['a', 'b', 'c']);
console.log(firstAndLast[0]);
console.log(firstAndLast[1]);

function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}
console.log(greet('de Lange', 'Hoi'))
