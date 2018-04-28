var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest)

function handleRequest(req, res) {
    
    var path = req.url;

    switch (path) {

        case "/":
            return displayIndex(path, req, res);

        case "/Food":
            return displayFood(path, req, res);

        case "/Movies":
            return displayMovies(path, req, res);

        case "/CSS":
            return displayCSS(path, req, res);

        default:
            return display404(path, req, res);
    };
};


function displayIndex(req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

function displayFood(req, res) {
    fs.readFile(__dirname + "/foods.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

function displayMovies(req, res) {
    fs.readFile(__dirname + "/movies.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

function displayCSS(req, res) {
    fs.readFile(__dirname + "/css.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

