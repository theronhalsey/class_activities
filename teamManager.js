var inquirer = require("inquirer");

var playerCount = 0;
var players = [];
var subs = [];

var Player = function (name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (Math.round(Math.random) = 1 && this.defense < 10) {
            this.defense++
        } else if (this.offense < 10) {
            this.offense++
        }
    };
    this.badGame = function () {
        if (Math.round(Math.random) = 1 && this.defense > 1) {
            this.defense--
        } else if (this.offense > 1) {
            this.offense++
        }
    };
    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    };
};

var getPlayers = function () {
    if (playerCount < 2) {
        inquirer.prompt([{
            name: "name",
            message: "What is the player's name?"
        }, {
            name: "position",
            message: "What is the player's position?"
        }, {
            name: "offense",
            message: "What is the playre's offensive skill level?"
        }, {
            name: "defense",
            message: "What is the player's defensive skill level?"
        }]).then(function (answers) {
            var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
            newPlayer.printStats();
            players.push(newPlayer);
            playerCount++
            getPlayers();
        });
    } else if (playerCount < 3) {
        inquirer.prompt([{
            name: "name",
            message: "What is the player's name?"
        }, {
            name: "position",
            message: "What is the player's position?"
        }, {
            name: "offense",
            message: "What is the playre's offensive skill level?"
        }, {
            name: "defense",
            message: "What is the player's defensive skill level?"
        }]).then(function (answers) {
            var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
            newPlayer.printStats();
            subs.push(newPlayer);
            playerCount++
            getPlayers();
        });
    } else {
        console.log("You have a full team!")
    };
};

var playGame = function() {
    var attack = Math.floor(Math.random) * 20
    var defend = Math.floor(Math.random) * 20
}

getPlayers();