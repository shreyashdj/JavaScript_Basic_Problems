/*  
    Enter 3 Numbers do following Arithmetic operation and find the one that is maximum and minimum
        1. a + b * c        3. c + a / b
        2. a % b + c        4. a * b + c
*/

const prompt = require("prompt-sync")();
console.log();
let a = parseFloat(prompt(" Enter the number 'a' : "));
let b = parseFloat(prompt(" Enter the number 'b' : "));
let c = parseFloat(prompt(" Enter the number 'c' : "));

/*
    Performing Arithmetic operations
*/
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;
console.log("\n a + b * c = " + result1.toFixed(4) + "\n a % b + c = " + result2.toFixed(4) +
    "\n c + a / b = " + result3.toFixed(4) + "\n a * b + c = " + result4.toFixed(4))

/*
    Finding minimum result
*/

let minResult;

if (result1 < result2 && result1 < result3 && result1 < result4) {
    minResult = result1;
} else if (result2 < result3 && result2 < result4) {
    minResult = result2;
} else if (result3 < result4) {
    minResult = result3;
} else {
    minResult = result4;
}
console.log("\n Minimum result : " + minResult.toFixed(4));

/*
    Finding maximum result
*/

let maxResult;

if (result1 > result3 && result1 > result4 && result1 > result2) {
    maxResult = result1;
} else if (result2 > result3 && result2 > result4) {
    maxResult = result2;
} else if (result3 > result4) {
    mmaximumResultax = result3;
} else {
    maxResult = result4;
}
console.log(" Maximum result : " + maxResult.toFixed(4), "\n");