var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: " ",
    database: "Great_BidDB",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
});

var bidItem = function () {
    var query = connection.query("SELECT FROM Bid_List", function (err, res) {
        var currentBid = res.highest_bid;
        if (err) {
            throw err;
        } else if (userBid > currentBid) {
            var updateBid = connection.query("UPDATE Bid_List SET highest_bid = " + userBid, function (err, res) {
                console.log("The new high bid is " + res.highest_bid)
            })
        } else {
          console.log("Your bid was too low!")
          inputs();
        }
    })
}

var postItem = function () {
  var query = connection.query("INSERT INTO Bid_List SET?", {
    item: "  ",
    information: "   ",
    user_poster: "    ",
    highest_bid: "   "
  },
  function(err, res){
    console.log(res.affectedRows + "has been posted for bidding!")
  })
};

var viewItems = function() {
  var query = connection.query("SELECT * FROM Bid_List", function(err, res) {
    console.log("ID: " + " Item Name: " + " Description: " + " Number of Bids: ")
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + "     " + res[i].item + "   " + res[i].information + "   " + res[i].num_bids)
    }
  });
}

var inputs = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "initialPrompt",
            message: "What would you like to do?",
            choices: ['BID ON AN ITEM', 'POST AN ITEM']
        }
    ]).then(function (user) {
        if (user.initialPrompt === 'BID ON AN ITEM') {
            console.log('Yargh, ye be buyin');
            viewItems();

        } else if (user.initialPrompt === 'POST AN ITEM') {
            console.log('Yargh, ye be sellin');

            inquirer.prompt([

                {
                    type: "input",
                    name: "UserName_post",
                    message: "Who are you???"
                },
                {
                    type: "input",
                    name: "Item_infor",
                    message: "Please write a little about your item?"
                },
                {
                    type: "input",
                    name: "Item",
                    message: "What is the name of item you are trying to sell?"
                },
                {
                    type: "input",
                    name: "Price",
                    message: "How much would you like to sell this item for?"
                }
            ])
        }
    })
};

inputs();


    
    
    
    
    
    
// DROP DATABASE IF EXISTS Great_BidDB;

// CREATE DATABASE Great_BidDB;

// USE Great_BidDB;

// CREATE TABLE Bid_List (
//   id INTEGER(100) NOT NULL AUTO_INCREMENT,
//   item VARCHAR(45) NULL,
//   information  VARCHAR(45) NULL,
//   num_bids INTEGER(100) NULL,
// 		user_poster VARCHAR(45) NULL,
//  user_bidder VARCHAR(45) NULL,
//   highest_bid INTEGER(100) NULL,
//   PRIMARY KEY (id)
// );

// INSERT INTO Bid_List (item, information, user_poster, highest_bid) 
// values ( "Hello Kitty",  "Cute cat toy from japan", "cat_1", 5);

// INSERT INTO Bid_List (item, information, user_poster, highest_bid) 
// values ( "Dog Treats",  "best dog treats ever", "dog_1",  10);

// INSERT INTO Bid_List (item, information, user_poster, highest_bid) 
// values ( "TV",  "working tv", "person_1",  100);

// SELECT * FROM Bid_List;