// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Characters = require("../config/characters.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all Characters) then provides JSON
  app.get("/api/:Characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.Characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the Characters here to run our searches)
      Characters.searchCharacter(req.params.Characters, function(data) {
        res.json(data);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the Characters.
      // (Note how we're using the Characters here to run our searches)
      Characters.allCharacters(function(data) {
        res.json(data);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;

    // Then send it to the Characters to "save" into the DB.
    Characters.addCharacter(character, function(data) {
      console.log(data);
    });

  });
};
