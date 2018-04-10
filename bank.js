var fs = require('fs');
var operation = process.argv[2];
var money = parseFloat(process.argv[3]);

/* fs.appendFile("vault.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error); */

if (operation === "total") {
    fs.readFile("vault.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            var transactions = data.split(",");
            console.log(transactions);
            var reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(transactions.reduce(reducer))
        }
    })
} else if (operation === "deposit") {
    fs.appendFile("vault.txt", money + ", ", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            (console.log("You have deposited $" + money))
        }
    })
} else if (operation === "withdraw") {
    fs.appendFile("vault.txt", 0-money + ", ", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            (console.log("You have withdrawn $" + money))
        }
    }
    )
} else if (operation === "lotto") {

} else {
    console.log("THAT'S NOT HOW BANKS WORK, DUMMY!!")
}

