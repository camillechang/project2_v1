import React from "react";
import Axios from "axios";

import "./DailyWeather.css";

import {
  WiRain,
  WiThunderstorm,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";


const defaultCity = process.env.REACT_APP_CITY;
const apiKey = process.env.REACT_APP_APIKEY;
const units = process.env.REACT_APP_UNIT; //show temperature in C

class DailyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItemList: [],
    };
    this.getDataviaAxios = this.getDataviaAxios.bind(this);
  }

  componentDidMount() {
    this.getDataviaAxios();
  }

  // scheduleUpdate
  componentDidUpdate(prevProps) {
    if (this.props.cityName !== prevProps.cityName) {
      this.getDataviaAxios();
    }
  }



  getDataviaAxios = () => {
    let cityName = defaultCity;
    if (!!this.props.cityName) {//exists
      cityName = this.props.cityName;
    }

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}`
    console.log("getDataviaAxios--url----:", url);

    Axios.get(url).then((response) => {
      let data = response.data;
      console.log("data:", data);

      let sortedItems = this.getWeatherData(data.list);

      this.setState({ dataItemList: sortedItems });

      console.log("sortedItems:", sortedItems);
    });
  };

  //format data to output style
  getWeatherData = (list) => {
    let items = [];
    console.log("getWeatherData------:", list);
    list.forEach((item) => {
      const { dt_txt } = item;
      if (dt_txt.includes("00:00:00")) {//filter date
        // console.log("----2--");
        console.log("dt_txt:", dt_txt); //date 2021-09-04 00:00:00

        const { main } = item.weather[0];
        console.log(main); //weather Rain

        const { temp } = item.main;
        console.log(temp); //temp 24.53

        let dataItem =
        {
          date: this.getDayofWeek(dt_txt),
          weather: main,
          temperature: this.getTemp(temp),
        };
        items.push(dataItem);
      }
    });

    console.log("getWeatherData--items----:", items);
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
    // console.log("weather : " + weather);
    let dayWeather = weather.toLowerCase();
    // console.log("weather2 : " + dayWeather);
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
      <div className="daily_weather--main" >
        {this.state.dataItemList.map((item, index) => (
          <div className="daily_weather--item" key={index}>
            <h3>{item.date}</h3>
            {this.getIcon(item.weather)}
            <h4>{item.temperature}° </h4>
            {/* <h6>{item[1].weather} </h6> */}
          </div>
        ))}
      </div>
    );
  }
}
export default DailyWeather;
