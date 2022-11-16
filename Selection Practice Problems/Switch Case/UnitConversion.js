/*
    Write a program that takes User Inputs and does Unit Conversion of different Length units"
    1. Feet to Inch      3. Inch to Feet
    2. Feet to Meter     4. Meter to Feet
*/

const prompt = require("prompt-sync")();

console.log("\n 1) Feet to Inch     2) Feet to Meter \n 3) Inch to Feet     4) Meter to Feet");

let option = parseInt(prompt(" Choose above no. to select conversion : "));

switch (option) {
    case 1:
        console.log("\n 1 feet = 12 inch")
        var feet = parseFloat(prompt(" Enter Feet : "));
        console.log(" " + feet + " feet = " + (feet * 12).toFixed(4) + " inch \n")
        break;
    case 2:
        console.log("\n 1 feet = 0.3048 meter")
        var feet = parseFloat(prompt(" Enter Feet : "));
        console.log(" " + feet + " feet = " + (feet * 0.3048).toFixed(4) + " meter \n")
        break;
    case 3:
        console.log("\n 1 feet = 12 inch")
        var inch = parseFloat(prompt(" Enter Inch : "));
        console.log(" " + inch + " inch = " + (inch / 12).toFixed(4) + " feet \n")
        break;
    case 4:
        console.log("\n 1 feet = 0.3048 meter")
        var meter = parseFloat(prompt(" Enter Meter : "));
        console.log(" " + meter + " meter = " + (meter / 0.3048).toFixed(4) + " feet \n")
        break;
    default:
        console.log("\n Invalid Input \n")
        break;
}