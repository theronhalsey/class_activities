var inquirer = require("inquirer");

function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
    this.printInfo = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
            "\nAge: " + this.age + "\nLanguages: " + this.language);
    };
}

inquirer.prompt([{
    name: "name",
    message: "What is your name?"
}, {
    name: "position",
    message: "What is your current position?"
}, {
    name: "age",
    message: "How old are you?"
}, {
    name: "language",
    message: "What is your favorite programming language?"
}]).then(function(answers) {
    var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
    newGuy.printInfo();
});