/*
    Find the Magic Number
    a. Ask the user to think of a number n between 1 to 100
    b. Then check with the user if the number is less than n/2 or greater
    c. Repeat till the Magic Number is reached..
*/

const prompt = require("prompt-sync")();

let low = 0;
let high = 100;
let mid = 50;

do {
    console.log("\n Enter 0 if num is match with " + mid
        + "\n Enter 1 if num is less than " + mid
        + " \n Enter 2 if num is greater than " + mid)

    var n = parseInt(prompt(" Enter option : "))

    if (n == 1) {
        high = mid;
        mid = parseInt((low + high) / 2);
    }
    else if (n == 2) {
        low = mid
        mid = parseInt((low + high) / 2);
    }
    else if (n == 0) {
        console.log("\n This is your number : " + mid + "\n");
    }
    else {
        console.log("\n Invalid Input \n")
        n = 0;
    }
} while (n != 0);