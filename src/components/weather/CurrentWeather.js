import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./CurrentWeather.css";

const defaultCity = process.env.REACT_APP_CITY;
const apiKey = process.env.REACT_APP_APIKEY;
const units = process.env.REACT_APP_UNIT; //show temperature in C


const CurrentWeather = (props) => {
  const [cityName, setCityName] = useState(defaultCity);
  const [curentWeatherData, setCurrentWeatherData] = useState([]);

  useEffect(() => {
    const getCurrentWeatherData = () => {
      let city = defaultCity;
      if (props.cityName) {//exists
        setCityName(props.cityName);
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
      // console.log("getDataviaAxios--url----:", url);
      Axios.get(url).then((response) => {
        // handle success
        let data = response.data;
        console.log(data);

        let sortedItems = {
          temperature: data.main.temp, //get 00.0
          weather: data.weather[0].main,
          humidity: data.main.humidity,
          speed: data.wind.speed
        };
        setCurrentWeatherData(sortedItems);
      });
    };
    getCurrentWeatherData();
  }, [props]);


  return (
    <div className="current_weather--main">
      <h3 className="current_weather--city" >
        {cityName}
      </h3>
      <div className="current_weather--body">
        <div className="current_weather--temp">
          <h2 className="current_weather--h2">{curentWeatherData.temperature}°</h2>
          <div className="current_weather--description">
            {curentWeatherData.weather}
          </div>
        </div>
        <div className="current_weather--hw">
          <div className="current_weather--humidity">
            <h4>HUMIDITY</h4>
            <span>{curentWeatherData.humidity}%</span>
          </div>
          <div className="current_weather--wind">
            <h4>WIND</h4>
            <span>{curentWeatherData.speed}K/M</span>
          </div>
        </div>
      </div>
    </div>
  );

}
export default CurrentWeather;
