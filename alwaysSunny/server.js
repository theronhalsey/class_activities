var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySqueekWll2018!",
    database: "seinfeld"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/cast", function (req, res) {
    connection.query("SELECT * FROM actors", function (err, result) {

        var html = "<h1> Cast </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Character: " + result[i].name + " </p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

app.get("/coolness-chart", function (req, res) {
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function (err, result) {

        var html = "<h1> Cast </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Character: " + result[i].name + " </p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

app.get("/attitude/:attitude", function (req, res) {
    connection.query("SELECT * FROM actors", function (err, result) {
        var attitude = req.params.attitude

        var html = "<h1> Cast </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            if (attitude === result[i].attitude) {
                html += "<li><p> ID: " + result[i].id + "</p>";
                html += "<p>Character: " + result[i].name + " </p></li>";
                html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
                html += "<p>Attitude: " + result[i].attitude + " </p></li>";
            }
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});