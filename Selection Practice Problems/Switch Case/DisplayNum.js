/*
    Read Number from (1, 10, 100, 1000, 10000) and display unit, ten, hundred,...
*/

const prompt = require("prompt-sync")();
console.log();
let num = parseInt(prompt(" Enter the number from (1, 10, 100, 1000, 10000) : "));

switch (num) {
    case 1:
        console.log(" " + num, ": Unit \n");
        break;
    case 10:
        console.log(" " + num, ": Ten \n");
        break;
    case 100:
        console.log(" " + num, ": One Hundred \n");
        break;
    case 1000:
        console.log(" " + num, ": One Thousand \n");
        break;
    case 10000:
        console.log(" " + num, ": Ten Thousand \n");
        break;
    default:
        console.log(" Invalid Number \n");
        break;
}