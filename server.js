// Load dotenv
require("dotenv").config();
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Relative Directory Names
var publicDir = "app/public/";
var dataDir = "app/data/";
var routingDir = "app/routing/"

// Sets up the Express App
// =============================================================
var app = express();
PORT = process.env.PORT || 3300;

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, publicDir, "home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});