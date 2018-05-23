// var http = require("http");
// var fs = require("fs");
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("/../public/home.html");
});

app.get("/survey", function(req, res) {
  res.send("/../public/survey.html");
});

// var PORT = 3000;

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   var path = req.url;

//   switch (path) {
//     case "/survey":
//       return fs.readFile(__dirname + "/../public/survey.html", function(
//         err,
//         data
//       ) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//     // default to rendering index.html, if none of above cases are hit
//     default:
//       return fs.readFile(__dirname + "/../public/home.html", function(
//         err,
//         data
//       ) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//   }
// }

// // Starts our server.
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
