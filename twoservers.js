var http = require("http");

var nicePORT = 7000;
var badPORT = 7500;

function niceThing(request, response) {
    response.end("You're nice!");
};

function badThing(request, response) {
    response.end("You're lazy!")
};

var niceServer = http.createServer(niceThing);
niceServer.listen(nicePORT, function () {
    console.log("Nice Server is listening on " + nicePORT);
});

var badServer = http.createServer(badThing);
badServer.listen(badPORT, function () {
    console.log("Bad server is listening on " + badPORT);
});