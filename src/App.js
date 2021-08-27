// import logo from "./logo.svg";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { WiRaindrops, WiThunderstorm, WiDaySunny, WiDayCloudy } from "react-icons/wi";

function App() {
  return (
    <div className="container">
      {/* weather detail */}
      <div className="weather-detail">
        <div className="today-weather">
        <h2>12°</h2>
        <h4>CLOUDY</h4>
        </div>
  
        
        <div className="city-location">
        <h3 className="city-name">FRANCE</h3>
        <div className="link-top" />
        </div>
       

        <div className="humidity-wind">
          <div className="humidity">
            <h4>Humidity</h4>
            <span>14%</span>
          </div>
          <div className="weatherLine"></div>
          <div className="wind">
            <h4>Wind</h4>
            <label>12 K/M</label>
          </div>
        </div>
      </div>

      {/* left part */}
      <div className="botom-part">
        <div className="left-part">
          <div className="twitter-feed">
            <FaTwitter className="twitter-logo" />
            <h3>Twitter Feed </h3>
            <span>#France</span>
          </div>

          <div className="twitter-feed-words">
            <FaCircle className="grey-circle" />
            <p>Don't forget your sunscreen tomorrow! </p>
          </div>
          <div className="twitter-feed-words">
            <FaCircle className="grey-circle" />   <p>Amazing weather in Paris!</p>
          </div>
          <div className="next-div">

            <h4 className="next-text">NEXT</h4>
            <BsFillCaretRightFill className="twitter-next" />

          </div>

        </div>
        {/* weekly weather */}
        <div className="right-part">
          <div className="dayWeather">
            <h3>MON</h3>
            <WiRaindrops className="dayweather-icons dayweather-rain" />
            <h4>9°</h4>
            <h6>RAINING</h6>
          </div>
          <div className="dayWeather ">
            <h3>TUE</h3>
            <WiDaySunny className="dayweather-icons dayweather-icons-sunny" />
            <h4>15°</h4>
            <h6>SUNNY</h6>
          </div>
          <div className="dayWeather  ">
            <h3>WED</h3>
            <WiDayCloudy className="dayweather-icons dayweather-icons-sunny" />
            <h4>11°</h4>
            <h6>CLOUDY</h6>
          </div>
          <div className="dayWeather  ">
            <h3>THU</h3>
            <WiThunderstorm className="dayweather-icons dayweather-icons-sunny" />
            <h4>7°</h4>
            <h6>STORM</h6>

          </div>
          <div className="dayWeather">
            <h3>FRI</h3>
            <WiDaySunny className="dayweather-icons dayweather-icons-sunny" />
             <h4>18°</h4>
            <h6>SUNNY</h6>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
