/*
    Read Number from (1, 10, 100, 1000, 10000) and display unit, ten, hundred,...
*/

const prompt = require("prompt-sync")();
console.log();
var num = prompt(" Enter the number from (1, 10, 100, 1000, 10000) : ");
if (num == 1) {
    console.log(" ", num, ": Unit \n");
} else if (num == 10) {
    console.log(" ", num, ": Ten \n");
} else if (num == 100) {
    console.log(" ", num, ": One Hundred \n");
} else if (num == 1000) {
    console.log(" ", num, ": One Thousand \n");
} else if (num == 10000) {
    console.log(" ", num, ": Ten Thousand \n");
} else {
    console.log(" Invalid Number \n");
}