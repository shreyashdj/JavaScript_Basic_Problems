/*
    Read Number and Display the week day (Sunday, Monday,...)
*/

var prompt = require("prompt-sync")();
console.log();
let num = parseInt(prompt(" Enter the Day number : "));

switch (num) {
    case 1:
        console.log(" Sunday \n");
        break;
    case 2:
        console.log(" Monday \n");
        break;
    case 3:
        console.log(" Tuesday \n");
        break;
    case 4:
        console.log(" Wednesday \n");
        break;
    case 5:
        console.log(" Thursday \n");
        break;
    case 6:
        console.log(" Friday \n");
        break;
    case 7:
        console.log(" Saturday \n");
        break;
    default:
        console.log(" Invalid Number \n");
        break;
}