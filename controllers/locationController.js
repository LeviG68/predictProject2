const busy_hours = require('busy-hours');

const key = require('../env.js');


const nature = 'ChIJI3SnU1F5bIcREWJ08vMIP80' //process.env.NATURE_ID;
const zoo = 'ChIJcY8lIE55bIcRKWyHPdIO_VM' //process.env.ZOO_ID;
const fish = 'ChIJ1YNrYr54bIcRZkKIcfIJiU8' //process.env.FISH_ID;
const kid = 'ChIJHzj7kbt4bIcR_Fi8q1-va8A' //process.env.KID_ID;

module.exports = {
  getLocationDetails: (req, res) => {
    let busyHours;

    if (req.params.location === 'nature') {
      busyHours = busy_hours(nature, key.GOOGLE_KEY);
    } else if (req.params.location === 'zoo') {
      busyHours = busy_hours(zoo, key.GOOGLE_KEY);
    } else if (req.params.location === 'fish') {
      busyHours = busy_hours(fish, key.GOOGLE_KEY);
    } else {
      busyHours = busy_hours(kid, key.GOOGLE_KEY);
    }

    busyHours.then(data => {
      const today = new Date();
      const day = today.getDay();
      const percents = data.week[day].hours.map(x => x.percentage)
      res.json(percents);
    });
  }
}

// 
// const locations = [];

// busy_hours(location, key).then(data => {
//   console.log(data);
// });

// // module.export = () => {
//   keysArray.forEach(location => {
//     busy_hours(location, key).then(data => {
//       // console.log(data);
//       // console.log(data.week[0].hours);
//       const today = new Date();
//       const day = today.getDay();
//       // console.log(day);
//       console.log(location);
//       console.log(data.week[day].hours.map(x => x.percentage));
//       locations.push(location);
//     });
//   });
// //   return;
// // }; 
// console.log(locations);

  // export default controller;