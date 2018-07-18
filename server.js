const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log('PRODUCTION! ', path.join(__dirname + "/client/build"));
  // app.use(express.static(path.join(__dirname + "/client/build")));
  app.use(express.static("client/build"));
}

// app.use(routes);

// app.get("/api/user", (req, res) => {
//   res.status(200).json({username: "ME"});
// });

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));  
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
