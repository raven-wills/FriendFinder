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
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
