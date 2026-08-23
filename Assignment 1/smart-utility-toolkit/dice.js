// dice.js
// random dice generator using crypto module
// run: node dice.js

var crypto = require("crypto");

console.log("Rolling Dice...");
console.log("");

// loop se 5 baar dice roll karo
for (var i = 1; i <= 5; i++) {
    // crypto.randomInt(1, 7) gives number between 1 to 6
    var diceValue = crypto.randomInt(1, 7);
    console.log("Dice Rolled:", diceValue);
}

console.log("");
console.log("Done!");
