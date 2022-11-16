//Read a single digit number and write the number in word

var prompt = require('prompt-sync')();
console.log();
let number = parseInt(prompt(" Enter the single digit number: "));


switch (number) {
    case 0:
        console.log(" The number is ZERO \n");
        break;
    case 1:
        console.log(" The number is ONE \n");
        break;
    case 2:
        console.log(" The number is TWO \n");
        break;
    case 3:
        console.log(" The number is THREE \n");
        break;
    case 4:
        console.log(" The number is FOUR \n");
        break;
    case 5:
        console.log(" The number is FIVE \n");
        break;
    case 6:
        console.log(" The number is SIX \n");
        break;
    case 7:
        console.log(" The number is SEVEN \n");
        break;
    case 8:
        console.log(" The number is EIGHT \n");
        break;
    case 9:
        console.log(" The number is NINE \n");
        break;
    default:
        console.log(" Invalid Number \n");
        break;
}