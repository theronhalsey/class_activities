var Char = function (name, profession, gender, age, strength, hitPoints, printStats) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function () {
        console.log("Name: " + this.name + '\n' + "Class: " + this.profession + '\n' + "Age: " + this.age + '\n' + "Strength: " + this.strength + '\n' + "Hit Points: " + this.hitPoints)
    }
    this.isAlive = function() {
        if (this.hitPoints > 0) {
            console.log(this.name + " is alive!")
            return true;
        } else {
            console.log(this.name + " is dead!")
            return false;
        }
    }
    this.attack = function(defender) {
        defender.hitPoints = defender.hitPoints - this.strength
        console.log(defender.hitPoints)
    }
    this.levelUp = function() {
        this.age++;
        this.strength = this.strength + 5;
        this.hitPoints = this.hitPoints + 25;
        this.printStats();
    }
};

var Bart = new Char("Bart", "Rogue", "Male", 26, 14, 50);
var Lisa = new Char("Lisa", "Wizard", "Female", 22, 8, 25);
var Marge = new Char("Marge", "Cleric", "Female", 40, 10, 34);
var Homer = new Char("Homer", "Fighter", "Male", 45, 18, 90);

while (Homer.isAlive() === true) {
    Bart.attack(Homer)
}

while (Marge.isAlive() === true) {
    Lisa.attack(Marge)
}