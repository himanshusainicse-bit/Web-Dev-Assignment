// calculator.js
// CLI based calculator using process.argv
// Usage: node calculator.js add 10 5

var args = process.argv;

// args[0] = node, args[1] = file name
// args[2] = operation, args[3] = num1, args[4] = num2

var operation = args[2];
var num1 = parseFloat(args[3]);
var num2 = parseFloat(args[4]);

console.log("Operation:", operation);
console.log("Num1:", num1);
console.log("Num2:", num2);

if (operation == "add") {
    var result = num1 + num2;
    console.log("Result:", result);

} else if (operation == "subtract") {
    var result = num1 - num2;
    console.log("Result:", result);

} else if (operation == "multiply") {
    var result = num1 * num2;
    console.log("Result:", result);

} else if (operation == "divide") {
    if (num2 == 0) {
        console.log("Error: Cannot divide by zero");
    } else {
        var result = num1 / num2;
        console.log("Result:", result);
    }

} else {
    console.log("Invalid operation! Use: add, subtract, multiply, divide");
}
