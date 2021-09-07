import "./App.css";

import React, { useState } from "react";
import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsSearch, BsFillCaretRightFill } from "react-icons/bs";

import CurrentWeather from "./components/weather/CurrentWeather";
import DailyWeather from "./components/weather/DailyWeather";

import TwitterFeed from "./components/weather/TwitterFeed";

function App() {

  let cityInput = React.createRef();
  // let cityName = "Canberra";
  const [cityName, setCityName] = useState("Canberra");

  function searchCityWeather() {
    let city = cityInput.current.value;
    console.log("search button clicks, city:", city);
    if (city !== undefined) {
      // cityName = city;
      setCityName(city);
    }
  }

  return (
    <div>
      <div className="header">
        <BsSearch />
        <input type="text" ref={cityInput} placeholder="Search by city name" />
        <button type="button" onClick={searchCityWeather}>Search</button>
      </div>

      <section className="container">
        {/* weather detail */}
        <CurrentWeather cityName={cityName} />
        {/* left twitter feed----- */}
        <div className="botom-part">
          <TwitterFeed cityName={cityName} />
          {/* weekly weather */}
          <DailyWeather />


        </div> </section></div >
  );
}

export default App;
