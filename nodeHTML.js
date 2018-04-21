var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest)

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/":
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/Foods":
            return fs.readFile(__dirname + "/foods.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/Movies":
            return fs.readFile(__dirname + "/movies.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });


        case "/CSS":
            return fs.readFile(__dirname + "/css.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        default:
            return display404(path, req, res);
    };
};

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});