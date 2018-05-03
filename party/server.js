var orm = require("./config/orm.js");

// Console log all the party names
orm.selectWhat("party_name", "parties");

// Console log all the client names.
orm.selectWhat("client_name", "clients");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.selectWhere("parties", "party_type", "grown-up");