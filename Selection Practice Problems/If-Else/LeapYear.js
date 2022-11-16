/*
    Check if year is Leap or not
*/

const prompt = require("prompt-sync")();
console.log();
let year = (prompt(" Enter year : "));
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    console.log(" " + year + " is a leap year \n");
} else {
    console.log(" " + year + " is not a leap year \n");
}