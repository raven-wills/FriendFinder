var express = require("express");
var fs = require("fs");
var apiRoutes = require("app/routing/apiRoutes");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
