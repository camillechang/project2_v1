import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./DailyWeather.css";
import { getWeatherData } from "../util/utils";

import {
  WiRain,
  WiThunderstorm,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";

const defaultCity = process.env.REACT_APP_CITY;
const apiKey = process.env.REACT_APP_APIKEY;
const units = process.env.REACT_APP_UNIT; //show temperature in C

const DailyWeather = (props) => {
  const [cityName, setCityName] = useState(defaultCity);
  const [dataItemList, setDataItemList] = useState([]);

  useEffect(() => {
    const getFivedaysData = () => {
      // let city = defaultCity;
      if (props.cityName) {
        //exists
        setCityName(props.cityName);
      }

      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}`;
      console.log("getDataviaAxios--url----:", url);

      Axios.get(url).then((response) => {
        let data = response.data;
        console.log("data:", data);
        let sortedItems = getWeatherData(data.list);
        setDataItemList(sortedItems);
      });
    };

    getFivedaysData();
    console.log("sortedItems:", dataItemList);
  }, [props]);

  const getIcon = (weather) => {
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

  return (
    <div className="daily_weather--main">
      {dataItemList.map((item, index) => (
        <div className="daily_weather--item" key={index}>
          <h3>{item.date}</h3>
          {getIcon(item.weather)}
          <h4>{item.temperature}° </h4>
        </div>
      ))}
    </div>
  );
};
export default DailyWeather;
