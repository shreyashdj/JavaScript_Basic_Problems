/*
    Program to simulate coin flip and print out "Heads" or "Tails" accordingly.
*/

// Generating random number 1 or 2

let coinFlip = Math.random();

if (coinFlip <= 0.5) {
    console.log("\n Coin flipped : Heads \n");
}
else {
    console.log("\n Coin flipped : Tails \n")
}