/*
    Write program that takes  input and determines if the number is a prime.
*/

const prompt = require("prompt-sync")();
console.log();
let num = parseInt(prompt(" Enter the number : "))
let count = 0;
for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        count += 1;
        break;
    }
}
if (count == 0 && num > 1) {
    console.log(" " + num + " is a Prime Number \n");
}
else {
    console.log(" " + num + " is not a Prime number \n");
}