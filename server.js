// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

//Serve static content for the app from the "public" directory
// app.use(express.static("public"));

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
//   });
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));