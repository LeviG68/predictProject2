require('dotenv').config();
const busy_hours = require('busy-hours');


const key = 'AIzaSyDKiXuXaIyn46Yx1e4qjaMfOk1Dg1voNZs'; //process.env.GOOGLE_KEY;

const nature = 'ChIJI3SnU1F5bIcREWJ08vMIP80' //process.env.NATURE_ID;
const zoo = 'ChIJcY8lIE55bIcRKWyHPdIO_VM' //process.env.ZOO_ID;
const fish = 'ChIJ1YNrYr54bIcRZkKIcfIJiU8' //process.env.FISH_ID;
const kid = 'ChIJHzj7kbt4bIcR_Fi8q1-va8A' //process.env.KID_ID;

const keysArray = [zoo, fish, nature, kid];

const locations = [
  {
  id: "1",
  location: "Denver Zoo",
  data:[]
  },
  {
  id: "2",
  location: "Denver Aquarium",
  data:[]
  },
  {
  id: "3",
  location: "Denver Museum of Nature and Science",
  data:[]
  },
  {
  id: "4",
  location: "Denver Childrens Museum",
  data:[]
  },
];

// module.export = () => {
  keysArray.forEach(location => {
    busy_hours(location, key).then(data => {
      // console.log(data);
      // console.log(data.week[0].hours);
      const today = new Date();
      const day = today.getDay();
      // console.log(day);
      // console.log(location);
      const percents= (data.week[day].hours.map(x => x.percentage));
      // console.log(data.week[day].hours.map(x => x.percentage));
    })
    console.log(locations);
  });
  // });
  // return;
// }; 

