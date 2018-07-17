const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// -------------------------------Google map node module----------------------------------------------------



  const key = 'AIzaSyDKiXuXaIyn46Yx1e4qjaMfOk1Dg1voNZs';
  
  


const busy_hours = require('busy-hours');
 
// --------------------------Denver Zoo------------------------------------------------------------------------

const zoo_id = 'ChIJcY8lIE55bIcRKWyHPdIO_VM';

busy_hours(zoo_id, key).then(data => {
  console.log(data);
  const formattedDataZoo = [];
  data.week.forEach((day) => {
    const formattedHourZoo = {
      day: day.day
    };
    day.hours.forEach(hour => {
      formattedHourZoo[hour.hour] = hour.percentage
    })
    formattedDataZoo.push(formattedHourZoo);
  })
    console.log(formattedDataZoo);
 });

 //-----------------------------------------------------------------------------------------------------------
 
// ----------------------------------------downtown denver aquarium -------------------------------------------

const fish_id = 'ChIJ1YNrYr54bIcRZkKIcfIJiU8';

busy_hours(fish_id, key).then(data => {
  console.log(data);
  const formattedDataFish = [];
  data.week.forEach((day) => {
    const formattedHourFish = {
      day: day.day
    };
    day.hours.forEach(hour => {
      formattedHourFish[hour.hour] = hour.percentage
    })
    formattedDataFish.push(formattedHourFish);
  })
    console.log(formattedDataFish);
 });

//  -----------------------------------------------------------------------------------------------------------

// -------------------------------------Denver Childerns Museum------------------------------------------------

const kid_id = 'ChIJHzj7kbt4bIcR_Fi8q1-va8A';

busy_hours(kid_id, key).then(data => {
  console.log(data);
  const formattedDataKid = [];
  data.week.forEach((day) => {
    const formattedHourKid = {
      day: day.day
    };
    day.hours.forEach(hour => {
      formattedHourKid[hour.hour] = hour.percentage
    })
    formattedDataKid.push(formattedHourKid);
  })
    console.log(formattedDataKid);
 });
//  -----------------------------------------------------------------------------------------------------------

// -------------------------------------------Denver Museum of Nature and Science------------------------------

const nature_id = 'ChIJI3SnU1F5bIcREWJ08vMIP80';

busy_hours(nature_id, key).then(data => {
  console.log(data);
  const formattedDataNature = [];
  data.week.forEach((day) => {
    const formattedHourNature = {
      day: day.day
    };
    day.hours.forEach(hour => {
      formattedHourNature[hour.hour] = hour.percentage
    })
    formattedDataNature.push(formattedHourNature);
  })
    console.log(formattedDataNature);
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

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
