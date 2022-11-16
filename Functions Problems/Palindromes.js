/*
    Write a function to check if the two numbers are Palindromes
*/

/*
    Function to check Palindrome
*/
let check = function (number) {
    let originalNumber = number;
    let rem;
    let temp = 0;

    while (number > 0) {
        rem = number % 10;
        temp = (temp * 10) + rem;
        number = parseInt(number / 10);
    }
    if (originalNumber == temp) {
        console.log(" " + originalNumber + " is Planindrome number \n")
    }
    else {
        console.log(" " + originalNumber + " is not Planindrome number \n");
    }
}

/*
    Main code
*/
const prompt = require("prompt-sync")();
console.log()
let number = parseInt(prompt(" Enter number to check planindrome : "));
check(number);