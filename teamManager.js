var inquirer = require("inquirer");

var playerCount = 0;
var players = [];
var subs = [];
var games = 0

var Player = function (name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (Math.round(Math.random) = 1 && this.defense < 10) {
            this.defense++
            console.log(this.name + "'s defense has gone up!")
        } else if (this.offense < 10) {
            this.offense++
            console.log(this.name + "'s offense has gone up!")
        }
    };
    this.badGame = function () {
        if (Math.round(Math.random) = 1 && this.defense > 1) {
            this.defense--
            console.log(this.name + "'s defense has gone down!")
        } else if (this.offense > 1) {
            this.offense++
            console.log(this.name + "'s offense has gone down!")
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

var playGame = function (player1, player2) {
    if (games < 5) {
        var attack = Math.floor(Math.random) * 20
        var defend = Math.floor(Math.random) * 20
        var teamScore = 0
        var teamAttack = player1.offense + player2.offense
        var teamDefense = player1.defense + player2.defense
        if (attack > teamDefense && teamScore > 0) {
            teamScore--
        };
        if (teamAttack > defend) {
            teamScore++
        };
        games++
        playGame()
    } else {
        console.log("After " + games + " rounds, the final score is: " +teamScore)
        if (teamScore > 0) {
            console.log("Good job! You win!");
            player1.goodGame();
            player2.goodGame();
        } else if (teamScore < 0) {
            console.log("So sad! You loose!");
            player1.badGame();
            player2.badGame();
        } else {
            console.log("You tied! Try agin!");
        }
    }
}

getPlayers();