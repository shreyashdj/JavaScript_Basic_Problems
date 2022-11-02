/*
 *  Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
 */

// generating Five 3-digits Random numbers
const num1 = Math.floor(Math.random() * 898 + 101);
const num2 = Math.floor(Math.random() * 898 + 101);
const num3 = Math.floor(Math.random() * 898 + 101);
const num4 = Math.floor(Math.random() * 898 + 101);
const num5 = Math.floor(Math.random() * 898 + 101);
console.log("\n The Random Five 3 digit Numbers are: "+ num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5);

//initialize the minimum number is num1
let min = num1;
if (num2 < min) 
{min = num2};
if (num3 < min) 
{min = num3};
if (num4 < min) 
{min = num4};
if (num5 < min) 
{min = num5};
console.log("\n Minimum number is = " + min);

//initialize the maximum number is num1
max = num1;
if (num2 > max)
{max = num2};
if (num3 > max) 
{max = num3};
if (num4 > max) 
{max = num4};
if (num5 > max) 
{max = num5};
console.log("\n Maximum number is = " + max , "\n")