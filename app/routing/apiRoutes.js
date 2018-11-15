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
		
	});
};

module.exports = apiRoutes;