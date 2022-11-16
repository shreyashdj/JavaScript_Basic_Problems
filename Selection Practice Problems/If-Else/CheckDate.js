/*
    Write a program that takes day and month from the command line and prints true if
    day of month is between ( March 20 and June 20 ), false otherwise.
*/

const prompt = require("prompt-sync")();

console.log();
let date = parseInt(prompt(" Enter Date : "));
let month = parseInt(prompt(" Enter Month : "));

if ((1 <= date <= 20 && 3 < month <= 6) || (20 <= date <= 31 && 3 <= month < 6)) {
    console.log("\n True \n")
} else {
    console.log("\n False! Check the Date \n");
}