import "./App.css";

import React, { useState } from "react";
import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsSearch, BsFillCaretRightFill } from "react-icons/bs";

import CurrentWeather from "./components/weather/CurrentWeather";
import DailyWeather from "./components/weather/DailyWeather";

// import SideBarMenu from "./components/SideBarMenu";

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

      <div className="container">
        {/* weather detail */}
        <CurrentWeather cityName={cityName} />
        {/* left twitter feed----- */}
        <div className="botom-part">
          <div className="left-part">
            <div className="twitter-feed">
              <FaTwitter className="twitter-logo" />
              <h3>Twitter Feed </h3>
              <span className="cityhashtag">#{cityName}</span>
            </div>

            <div className="twitter-news">
              <div className="twitter-feed-words">
                <FaCircle className="grey-circle" />
                <p>Don't forget your sunscreen tomorrow! </p>
              </div>
              <div className="twitter-feed-words">
                <FaCircle className="grey-circle" />{" "}
                <p>Amazing weather in {cityName}!</p>
              </div>
            </div>

            <div className="next-div">
              <h4 className="next-text">NEXT</h4>
              <BsFillCaretRightFill className="next-arrow" />
            </div>
          </div>


          {/* weekly weather */}
          <DailyWeather />

        </div>
      </div></div>
  );
}

export default App;
