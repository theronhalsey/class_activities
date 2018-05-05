// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");
// Create a "Book" model with the following configuration
var Book = sequelize.define("book", {
// 1. A title property of type STRING
title: {
    type: Sequelize.STRING
  },
// 2. An author property of type STRING
author: {
    type: Sequelize.STRING
  },
// 3. A genre property of type STRING
genre: {
    type: Sequelize.STRING
  },
// 4. A pages property of type INTEGER
pages: {
    type: Sequelize.INTEGER
  },
// 5. Set timestamps to false on this model
timestamps: false
});
// Sync model with DB
Books.sync();
// Export the book model for other files to use
module.exports = Books;