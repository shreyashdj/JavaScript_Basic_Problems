/*
    Read Number and Display the week day (Sunday, Monday,...)
*/

var prompt = require("prompt-sync")();
console.log();
let number = parseInt(prompt(" Enter the week number : "));
if (number == 1) {
    console.log(" Sunday \n");
} else if (number == 2) {
    console.log(" Monday \n");
} else if (number == 3) {
    console.log(" Tuesday \n");
} else if (number == 4) {
    console.log(" Wednesday \n");
} else if (number == 5) {
    console.log(" Thursday \n");
} else if (number == 6) {
    console.log(" Friday \n");
} else if (number == 7) {
    console.log(" Saturday \n");
} else {
    console.log(" Entred Invalid Number \n");
}