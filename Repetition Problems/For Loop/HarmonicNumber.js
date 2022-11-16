/*
    Write program that takes command-line argument n and prints the nth harmonic number
*/

const prompt = require("prompt-sync")();
console.log();
let n = parseInt(prompt(" Enter term : "))
process.stdout.write(n + "th Harmonic Number : ");
for (i = 1; i < n; i++) {
    process.stdout.write(" 1/" + i + " +");
}
process.stdout.write(" 1/" + n);
console.log("\n");