/*
    Write program that takes range as input and print prime numbers from that range
*/

const prompt = require("prompt-sync")();
console.log();
let startNum = parseInt(prompt(" Enter the start number : "))
let endNum = parseInt(prompt(" Enter the end number : "))

console.log(" Prime Numbers from given range are :");

for (var num = startNum; num <= endNum; num++) {
    if (num < 2) {
        continue;
    }
    var count = 0;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            count += 1;
            break;
        }
    }
    if (count == 0) {
        console.log(" " + num);
    }
}
console.log();