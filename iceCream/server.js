var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
];

app.get("/vanilla", function (req, res) {
    res.render("index", icecreams[0]);
});

app.get("/chocolate", function (req, res) {
    res.render("index", icecreams[1]);
});

app.get("/banana", function (req, res) {
    res.render("index", icecreams[2]);
});

app.get("/greentea", function (req, res) {
    res.render("index", icecreams[3]);
});

app.get("/jawbreakers", function (req, res) {
    res.render("index", icecreams[4]);
});


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});