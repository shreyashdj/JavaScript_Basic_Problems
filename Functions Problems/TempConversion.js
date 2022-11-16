/*
    Help user find degF or degC based on their Conversion Selection. Use
    Case Statement and ensure that the inputs are within the Freezing Point (
    0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
    a. degF = (degC * 9/5) + 32
    b. degC = (degF – 32) * 5/9
*/

/*
    Function to convert degC to degF
*/
let degC_To_DegF = function (degC) {
    return degF = (degC * 9 / 5) + 32;
}

/*
    Function to convert degF to degC
*/
let degF_to_DegC = function (degF) {
    return degC = (degF - 32) * (5 / 9);
}

/*
    Main code for temperature conversion
*/
const prompt = require('prompt-sync')();
console.log();
let selection = parseInt(prompt(" Enter what your want to do =>   1) degC to degF , 2) degF to degC  => "));
switch (selection) {
    case 1:
        let degC = prompt(" Enter temprature -> ");
        if (0 <= degC && degC <= 100) {
            console.log(" " + degC + " degC = " + degC_To_DegF(degC) + " degF \n");
        } else {
            console.log(" Invalid Temperature \n")
        }
        break;
    case 2:
        let degF = prompt(" Enter temprature -> ");
        if (32 <= degF && degF <= 212) {
            console.log(" " + degF + " degF = " + degF_to_DegC(degF) + " degC \n");
        } else {
            console.log(" Invalid Temperature \n")
        }
        break;
    default:
        console.log(" Invalid Input \n")
}