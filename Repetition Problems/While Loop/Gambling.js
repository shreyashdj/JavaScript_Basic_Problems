/*
    Write a Program where a gambler starts with Rs 100 and places Re 1 bet
    until he/she goes broke i.e. no more money to gamble or reaches the
    goal of Rs 200. Keeps track of number of times won and number of bets made
*/

var money = 100;
let numOfBet = 0;
let numOfWin = 0;

console.log("\n Gambling till money reaches 0 or 200")

do {
    numOfBet++;
    let gamble = Math.random();
    if (gamble <= 0.5) {
        money += 1;
        numOfWin++;
    } else {
        money -= 1;
    }
} while (0 < money && money < 200);
console.log("\n Num of Bets : " + numOfBet + "\n Num of Wins : " + numOfWin + "\n");