import "./App.css";


import React, { useState } from "react";

import CurrentWeather from "./components/weather/CurrentWeather";
import DailyWeather from "./components/weather/DailyWeather";
import TwitterFeed from "./components/twitter/TwitterFeed";
import SearchBar from "./components/ui/SearchBar";

const App = (props) => {

  const [city, setCity] = useState("Canberra");
  const SaveDataHandler = (data) => {
    // const expendData = data
    console.log("App--get data from input:-----", data);
    // console.log(data);
    // const { cityName } = data.cityName;
    setCity(data.cityName);
  }

  return (

    <div className="weather-main">
      <SearchBar onSaveTitleData={SaveDataHandler} />
      <section className="container">
        <CurrentWeather cityName={city} />

        <div className="botom-part">
          <TwitterFeed cityName={city} />
          <DailyWeather cityName={city} />
        </div>
      </section>
    </div>
  );
}

export default App;