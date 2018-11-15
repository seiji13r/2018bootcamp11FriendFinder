// Load dotenv
require("dotenv").config();
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
PORT = process.env.PORT || 3300;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require the functions that contains the Application Routes
htmlRoutes = require(path.join(__dirname, 'app/routing/htmlRoutes'));
apiRoutes = require(path.join(__dirname, 'app/routing/apiRoutes'));

// Pass the express application to define the Routes.
htmlRoutes(app);
apiRoutes(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});