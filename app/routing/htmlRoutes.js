// Require Path
var path = require('path');

// Export HTML routes
function htmlRoutes(app) {

	// Home Page Route
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey Page Route
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};

module.exports = htmlRoutes;