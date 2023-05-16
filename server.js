// Required Modules
const express = require("express");
const db = require("./config/connection"); // Import the database connection module
const routes = require("./routes"); // Import the routes module

const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 3001; // Set the port number

app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(routes); // Use the routes defined in the routes module

db.once("open", () => { // Once the database connection is open
  app.listen(PORT, () => { // Start the server and listen on the specified port
    console.log(`API server running on port ${PORT}!`);
  });
});
