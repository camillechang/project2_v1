// const https = require("https");
// const url =
//   "https://api.openweathermap.org/data/2.5/forecast?appid=0cf172e803d3e760c17228daccbd18a6&q=Sydney&units=metric";
// https
//   .get(url, (res) => {
//     let data = "";
//     res.on("data", (chunk) => {
//       data += chunk;
//     });
//     res.on("end", () => {
//       data = JSON.parse(data);
//       console.log("------");
//       console.log(data.list.length);
//       data.list.map((item) => {
//         if (item.dt_txt.includes("00:00:00")) {
//           console.log(item.dt_txt); //date

//           console.log(item.weather[0].main); //temp

//           console.log(item.main.temp); //temp
//         }
//       });
//       //   console.log(data.list);
//     });
//   })
//   .on("error", (err) => {
//     console.log(err.message);
//   });
// function getDayofWeek() {
//   date = "2021-09-04 00:00:00";
//   newDate = date.split(" ");
//   let dt = new Date(newDate[0]);
//   console.log("getDay() : " + dt.getDay());

//   let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   let dayName = days[dt.getDay()];
//   console.log("dayName() : " + dayName);
// }

function getTemp() {
  let temp = parseFloat("24.53");

  temp.toFixed(1);
  console.log("temp : " + temp.toFixed(1));
}
getTemp();
