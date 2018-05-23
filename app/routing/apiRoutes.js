// Dependencies
// ===========================================================
var express = require("express");
// var server = require("../../server.js");

var app = express();
var PORT = 8080;

// Data
// ===========================================================
var friends = [
  {
    name: "Raven",
    photo: "https://en.wikipedia.org/wiki/Raven#/media/File:Head_of_Raven.jpg",
    scores: ["5", "4", "2", "1", "2", "2", "3", "2", "3", "2"]
  }
];

// Routes
// ===========================================================
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// var apiRoutes = function(app) {
//   return app.get("/api/friends", function(req, res) {
//     return res.json(friends);
//   });
// };

// module.exports = apiRoutes;

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
