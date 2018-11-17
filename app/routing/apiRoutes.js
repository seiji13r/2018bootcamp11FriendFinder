// Require Path
var path = require("path");

// Require the friends array.
var friendsArray = require(path.join(__dirname, "../data/friends"));

// Export API Routes
function apiRoutes(app) {

  
  app.get('/api/friends', function(req, res) {
    return res.json(friendsArray);
  });

  // Survey Page Route
  app.post('/api/friends', function(req, res) {
    let newBudy = req.body;
    // Parse String Numbers to Integers
    const intScores = newBudy.scores.map(element => parseInt(element));
    newBudy.scores = intScores;
    
    // Store the friend Comparison into a New Array.
    let friendsDiffArray = [];

    // Iterate over the friendsArray to compare results with each person.
    // The result containing (name, index, diff) is then stored in friendsDiffArray.
    // console.log(totalDifference(newBudy, friendsArray[0]));
    friendsArray.forEach(
      (friend, friendIndex) => friendsDiffArray.push(totalDifference(newBudy, friend, friendIndex))
    );
    
    // The resulting friendsDiffArray is tehn sorted by the diffference and the 
    // First result is wich is the minor diff will be the best match.
    
    // console.log(friendsDiffArray.sort((a, b)=> a.diff - b.diff ))
    bestMatchIndex = friendsDiffArray.sort((a, b)=> a.diff - b.diff)[0].friendIndex;
    
    // console.log(friendsArray[bestMatchIndex])
    bestMatch = friendsArray[bestMatchIndex];
    
    // The New User data is then added to the Friends Array,
    // console.log(newBudy);
    friendsArray.push(newBudy);

    // Return the bestMatch Friend.
    return res.send(bestMatch);
  });
};

function totalDifference(userNew, friend, friendIndex){
  // Create a New Array with the absolute score differences between the New User and the Exiting Friend.
  var diffArray = userNew.scores.map((score, index) => Math.abs(score-friend.scores[index]));
  // Sum all the elements in the diffArray to obtain the total Difference.
  var diffTotal = diffArray.reduce((a, b) => a + b, 0);
  // console.log(diffTotal)
  
  return {
   name: friend.name,
   friendIndex: friendIndex,
   diff: diffTotal,
  }
}

module.exports = apiRoutes;