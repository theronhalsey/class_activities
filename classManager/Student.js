var inquirer = require("inquirer");

var Student = function(name, favSub, gpa) {
    this.name = name;
    this.favSub = favSub;
    this.gpa = gpa;
};

inquirer.prompt([{
    name: "name",
    message: "What is the student's name?"
}, {
    name: "favSub",
    message: "What is the student's favorite subject?"
}, {
    name: "gpa",
    message: "What is the student's GPA?"
}]).then(function (answers) {
    var newClass = new Class(answers.name, answers.roomNum);
});

module.exports = Student