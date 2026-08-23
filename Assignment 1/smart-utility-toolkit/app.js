// app.js
// custom modules ka use karke reusability dikhate hai

var isEven = require("./modules/isEven");
var logger = require("./modules/logger");

logger.info("app.js is running...");

// isEven module use karna
var num1 = 4;
var num2 = 7;
var num3 = 10;
var num4 = 13;

// check each number
if (isEven.isEven(num1)) {
    console.log(num1 + " is Even");
} else {
    console.log(num1 + " is Odd");
}

if (isEven.isEven(num2)) {
    console.log(num2 + " is Even");
} else {
    console.log(num2 + " is Odd");
}

if (isEven.isEven(num3)) {
    console.log(num3 + " is Even");
} else {
    console.log(num3 + " is Odd");
}

if (isEven.isEven(num4)) {
    console.log(num4 + " is Even");
} else {
    console.log(num4 + " is Odd");
}

// isOdd check
console.log("Is 5 odd?", isEven.isOdd(5));
console.log("Is 8 odd?", isEven.isOdd(8));

logger.success("Module demo done!");
