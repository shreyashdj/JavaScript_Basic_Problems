//Read a single digit number and write the number in word

var prompt = require('prompt-sync')();
console.log();
let number = parseInt(prompt(" Enter the single digit number: "));

if (number == 0) {
    console.log(" The number is ZERO \n");
} else if (number == 1) {
    console.log(" The number is ONE \n");
} else if (number == 2) {
    console.log(" The number is TWO \n");
} else if (number == 3) {
    console.log(" The number is THREE \n");
} else if (number == 4) {
    console.log(" The number is FOUR \n");
} else if (number == 5) {
    console.log(" The number is FIVE \n");
} else if (number == 6) {
    console.log(" The number is SIX \n");
} else if (number == 7) {
    console.log(" The number is SEVEN \n");
} else if (number == 8) {
    console.log(" The number is EIGHT \n");
} else if (number == 9) {
    console.log(" The number is NINE \n");
} else {
    console.log(" Invalid Number \n")
}