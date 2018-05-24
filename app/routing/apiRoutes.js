var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var bestFriend = null;
    var bestFriendDifferentScore = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < friendsData.length; i++) {
      var currentScore = compare(req.body, friendsData[i]);
      if (currentScore < bestFriendDifferentScore) {
        bestFriend = friendsData[i];
        bestFriendDifferentScore = currentScore;
      }
    }
    console.log(bestFriend);
    friendsData.push(req.body);
    res.json(bestFriend);
  });
};

function compare(newFriend, oldFriend) {
  var totalDifferences = 0;
  for (let i = 0; i < oldFriend.scores.length; i++) {
    totalDifferences += Math.abs(newFriend.scores[i] - oldFriend.scores[i]);
  }
  return totalDifferences;
}
