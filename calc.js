var operator = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);
var num3 = parseFloat(process.argv[5]);

if (operator === "add") {
    console.log(num1 + num2);
} else if (operator === "subtract") {
    console.log(num1 - num2);
} else if (operator === "multiply") {
    console.log(num1 * num2);
} else if (operator === "divide") {
    console.log(num1 / num2);
} else if (operator === "remainder") {
    console.log(num1 % num2);
} else if (operator === "exp") {
    console.log(num1 ** num2);
} else if (operator === "algebra") {
    console.log((num3 - num2) / num1);
} else {
    console.log("operator not found");
}