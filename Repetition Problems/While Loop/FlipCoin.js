/*
    Extend the Flip Coin problem till either Heads or Tails wins 11 times.
*/

console.log("\n Fliping the coin \n")
let win = 0;
let headCount = 0;
let tailCount = 0;
while (win != 11) {
    let flipCoin = Math.random();
    if (flipCoin <= 0.5) {
        headCount++;
        console.log(" Head -", headCount);
        if (headCount == 11) {
            console.log("\n HEAD Wins!!! \n")
            win = headCount;
        }
    }
    else {
        tailCount++;
        console.log(" Tail -", tailCount);
        if (tailCount == 11) {
            console.log("\n TAIL Wins!!! \n")
            win = tailCount;
        }
    }
}