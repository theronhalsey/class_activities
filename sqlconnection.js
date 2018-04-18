var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySqueekWll2018!",
    database: "playlist_db",
});

var command = process.argv[2];

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
});

var readData = function () {
    connection.query("SELECT * FROM playlist1", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
};

var instertData = function () {
    connection.query("INSERT INTO playlist1 SET ?", {
        title: process.argv[3],
        artist: process.argv[4],
        genre: process.argv[5]
    })
};

var deleteData = function () {
    connection.query("DELETE FROM playlist1 WHERE title = " + process.argv[3], function (err, res) {
    })
};

switch (command) {
    case "read":
        readData();
        break;

    case "add":
        instertData();
        break;

    case "delete":
        deleteData();
        break;
};