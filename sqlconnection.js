var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySqueekWll2018!",
    database: "programming_db",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM programming_languages", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
};

