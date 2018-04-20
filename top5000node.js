var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySqueekWll2018!",
    database: "top_songs_db",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
});

var command = process.argv[2];
var searchTerms = [];

var getSearchTerms = function () {
    for (i = 3; i < process.argv.length; i++) {
        searchTerms.push(process.argv[i])
    }
};

var artistSearch = function () {
    getSearchTerms();
    connection.query("SELECT * FROM top5000 WHERE artist = '" + searchTerms.join(" ") + "'", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
};

var repeats = function () {
    connection.query("SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1;", function (err, res) {
        if (err) throw err;
        console.log(res)
        connection.end();
    })
};

var yearSearch = function () {
    connection.query("SELECT * FROM top5000 WHERE year_released >= '" + process.argv[3] + "' and year_released < '" + process.argv[4] + "'", function (err, res) {
        if (err) throw err;
        console.log(res)
        connection.end();
    })
};

var songSearch = function () {
    getSearchTerms()
    connection.query("SELECT * FROM top5000 WHERE song_title = '" + searchTerms.join(" ") + "'", function (err, res) {
        if (err) throw err;
        console.log(res)
        connection.end();
    })
}

switch (command) {
    case "artistSearch":
        artistSearch();
        break;

    case "repeats":
        repeats();
        break;

    case "yearSearch":
        yearSearch();
        break;

    case "songSearch":
        songSearch();
        break;
};