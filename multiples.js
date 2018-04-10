var number = parseFloat(process.argv[2]);
var multiples = [];

for (i = 0; i < number; i++) {
    if (number % 6 === 0) {
        multiples.push(number)
    }
    console.log(multiples)
}

function getSum(total, num) {
    return total + num;
}

console.log(multiples.reduce(getSum));