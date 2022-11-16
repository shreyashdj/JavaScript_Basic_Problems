/*
    Write a program that takes a command-line argument n and prints table
    of the powers of 2 that are less than or equal to 2^n till 256 is reached..
*/

const prompt = require("prompt-sync")();
console.log();
let n = parseInt(prompt(" Enter power : "))
console.log(" Priniting the table of 2 till 2^n or 256 :");
let result;
let i = 1;
while (result != 256 && i <= n) {
    result = Math.pow(2, i);
    console.log(" 2^" + i + ": " + result);
    i++;
}
console.log();