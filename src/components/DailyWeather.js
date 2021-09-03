import React from "react";
import "./DailyWeather.css";

import {
  WiRain,
  WiThunderstorm,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";

const cityName = "France";
const apiKey = "0cf172e803d3e760c17228daccbd18a6";
const units = "metric"; //show temperature in C
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}`;

class DailyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItemList: [],
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(url)
      .then((response) => {
        return response.json(); //this needs return, otherwise undefined
      })
      .then((data) => {
        // console.log(data);
        console.log(typeof data);
        console.log("length:", data.list.length);
        let sortedItems = this.getWeatherData(data.list);

        this.setState({ dataItemList: sortedItems });
      });
  }

  //format data to output style
  getWeatherData = (list) => {
    let items = [];
    console.log("getWeatherData------:", list);
    list.forEach((item) => {
      if (item.dt_txt.includes("00:00:00")) {
        console.log(item.dt_txt); //date 2021-09-04 00:00:00
        console.log("----2--");
        console.log(item.weather[0].main); //weather Rain

        console.log(item.main.temp); //temp 24.53

        const dataItem = [
          { date: this.getDayofWeek(item.dt_txt) },
          { weather: item.weather[0].main },
          { temperature: this.getTemp(item.main.temp) },
        ];
        items.push(dataItem);
      }
    });
    return items;
  };

  getDayofWeek = (date) => {
    // date = "2021-09-04 00:00:00";
    let newDate = date.split(" ");
    let dt = new Date(newDate[0]);
    console.log("getDay() : " + dt.getDay());

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dayName = days[dt.getDay()];
    console.log("dayName() : " + dayName);
    return dayName;
  };

  getTemp = (temp1) => {
    // temp1="24.53";
    let temp = parseFloat(temp1);

    let currentTemp = temp.toFixed(1);
    console.log("temp : " + currentTemp);
    return currentTemp;
  };

  getIcon = (weather) => {
    console.log("weather : " + weather);
    let dayWeather = weather.toLowerCase();
    console.log("weather2 : " + dayWeather);
    if (dayWeather.includes("rain")) {
      return <WiRain className="dayweather-icons" />;
    } else if (dayWeather.includes("sun")) {
      return <WiDaySunny className="dayweather-icons " />;
    } else if (dayWeather.includes("cloud")) {
      return <WiDayCloudy className="dayweather-icons " />;
    } else {
      //default weather
      return <WiThunderstorm className="dayweather-icons " />;
    }
  };

  render() {
    return (
      <div className="right-part">
        {this.state.dataItemList.map((item, index) => (
          <div className="dayWeather" key={index}>
            <h3>{item[0].date}</h3>
            {this.getIcon(item[1].weather)}
            <h4>{item[2].temperature}° </h4>
            {/* <h6>{item[1].weather} </h6> */}
          </div>
        ))}

        {/* <div className="dayWeather">
          <h3>MON</h3>
          <WiRaindrops className="dayweather-icons" />
          <h4>9°</h4>
          <h6>RAINING</h6>
        </div>
        <div className="dayWeather ">
          <h3>TUE</h3>
          <WiDaySunny className="dayweather-icons " />
          <h4>15°</h4>
          <h6>SUNNY</h6>
        </div>
        <div className="dayWeather  ">
          <h3>WED</h3>
          <WiDayCloudy className="dayweather-icons " />
          <h4>11°</h4>
          <h6>CLOUDY</h6>
        </div>
        <div className="dayWeather  ">
          <h3>THU</h3>
          <WiThunderstorm className="dayweather-icons " />
          <h4>7°</h4>
          <h6>STORM</h6>
        </div>
        <div className="dayWeather">
          <h3>FRI</h3>
          <WiDaySunny className="dayweather-icons " />
          <h4>18°</h4>
          <h6>SUNNY</h6>
        </div> */}
      </div>
    );
  }
}
export default DailyWeather;
