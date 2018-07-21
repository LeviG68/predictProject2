
// ********************************** NPM packages  *********************************************************
const express = require("express");
const session = require('express-session');
const passport = require('passport');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// requiring Body-parser for, parse incoming request bodies in a middleware before your handlers
var bodyParser = require("body-parser");
// requiring Morgan for loggin "dev", concise output colored by response status for development use. Status: token will color red= server error, yellow= client error, cyan= redirection code and uncolored= for all other code.
var logger = require("morgan");
// Requiring Axios for scraping our site, it is a Promised based HTTP client for the brouser and node.js. it makes HTTP requests from node.js, intercepts req, and response, transform req, res data and automatic transforms for JSON data.
var axios = require("axios");

var Sequelize = require('sequelize');

// ..................................Passport..................................................................
// Setting up port and requiring models for syncing
// var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
// var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   });
// });

// -------------------------------Google map node module----------------------------------------------------

  const key = 'AIzaSyDKiXuXaIyn46Yx1e4qjaMfOk1Dg1voNZs';

const busy_hours = require('busy-hours');
 
// --------------------------Denver Zoo-------------------------------------------------------------------

// const zoo_id = 'ChIJcY8lIE55bIcRKWyHPdIO_VM';

// busy_hours(zoo_id, key).then(data => {
//   console.log(data);
//   const formattedDataZoo = [];
//   data.week.forEach((day) => {
//     const formattedHourZoo = {
//       day: day.day
//     };
//     day.hours.forEach(hour => {
//       formattedHourZoo[hour.hour] = hour.percentage
//     })
//     formattedDataZoo.push(formattedHourZoo);
//   })
//     console.log(formattedDataZoo);
//  });

// -----------------------------------------------------------------------------------------------------------
 
//----------------------------------------downtown denver aquarium -------------------------------------------

// const fish_id = 'ChIJ1YNrYr54bIcRZkKIcfIJiU8';

// busy_hours(fish_id, key).then(data => {
//   console.log(data);
//   const formattedDataFish = [];
//   data.week.forEach((day) => {
//     const formattedHourFish = {
//       day: day.day
//     };
//     day.hours.forEach(hour => {
//       formattedHourFish[hour.hour] = hour.percentage
//     })
//     formattedDataFish.push(formattedHourFish);
//   })
//     console.log(formattedDataFish);
//  });

// -----------------------------------------------------------------------------------------------------------

//-------------------------------------Denver Childerns Museum------------------------------------------------

// const kid_id = 'ChIJHzj7kbt4bIcR_Fi8q1-va8A';

// busy_hours(kid_id, key).then(data => {
//   console.log(data);
//   const formattedDataKid = [];
//   data.week.forEach((day) => {
//     const formattedHourKid = {
//       day: day.day
//     };
//     day.hours.forEach(hour => {
//       formattedHourKid[hour.hour] = hour.percentage
//     })
//     formattedDataKid.push(formattedHourKid);
//   })
//     console.log(formattedDataKid);
//  });
//-----------------------------------------------------------------------------------------------------------

// ---------------------------------------Denver Museum of Nature and Science------------------------------

const nature_id = 'ChIJI3SnU1F5bIcREWJ08vMIP80';

// busy_hours(nature_id, key).then(data => {
//   console.log(data);
//   console.log(data.week[0].hours);
//   const today = new Date();
//   const day = today.getDay();
//   console.log(day);
//   console.log(data.week[day].hours.map(x => x.percentage));


  // const formattedDataNature = [];
  // data.week.forEach((day) => {
  //   const formattedHourNature = {
  //     day: day.day
  //   };
  //   day.hours.forEach(hour => {
  //     formattedHourNature[hour.hour] = hour.percentage
  //   })
  //   formattedDataNature.push(formattedHourNature);
  // })
  //   console.log(formattedDataNature);
//  });

//  ============================================API's==========================================================

app.post('/api/login', passport.authenticate(''), (req, res) => {
  console.log('ROUTE HIT');
  res.json("/");
});


app.get("/all", function(req, res) {

  res.send("It works");
  // db.location.find({})
  // .then(function(dblogin) {
  //   // If we were able to successfully find Articles, send them back to the client
  //   res.json(dblogin);
  // })
  // .catch(function(err) {
  //   // If an error occurred, send it to the client
  //   res.json(err);
  // });
  // // db.Articles.find({}, function(error, found) {
  // //   if (error) {
  // //     console.log(error);
  // //   }
  // //   else {
  // //     res.json(found);
  // //   }
  // // });
});



  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log('PRODUCTION! ', path.join(__dirname + "/client/build"));
  app.use(express.static(path.join(__dirname + "/client/build")));
}

// app.get("/api/user", (req, res) => {
//   res.status(200).json({username: "ME"});
// });

// Send every request to the React app
// Define any API routes before this runs


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/all", function(req, res) {

  res.send("It works");
});


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
// app.listen(PORT, function() {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });
