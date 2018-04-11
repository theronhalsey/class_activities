var inquirer = require("inquirer");
var Student = require("./Student");

var Class = function (students, numStudents, professor, roomNum) {
    this.students = [];
    this.numStudents = 0;
    this.professor = professor;
    this.roomNum = roomNum;
    this.addStudent = function (name, favSub, gpa) {
        for (i = 0; i < numStudents; i++) {
            this.students.push(new Student(name, favSub, gpa))
        };
    };
};

inquirer.prompt([{
    name: "name",
    message: "What is the professor's name?"
}, {
    name: "numStudents",
    message: "How many students are in the class?"
}, {
    name: "roomNum",
    message: "What is the class' room number?"
}]).then(function (answers) {
    var newClass = new Class(answers.name, answers.numStudents, answers.roomNum);
});