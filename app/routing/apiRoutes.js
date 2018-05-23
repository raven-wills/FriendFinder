// Dependencies
// ===========================================================
var express = require("express");

var app = express();

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
