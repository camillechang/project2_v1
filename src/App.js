// import logo from "./logo.svg";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import {
  WiRain,
  WiThunderstorm,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";

function App() {
  return (
    <div className="container">
      {/* weather detail */}
      <div className="top-part">
        <h3 className="city-location">FRANCE</h3>
        <div className="today-detail">
          <div className="today-weather">
            <h2 className="today-temp">12°</h2>
            <div className="today-temp1">CLOUDY</div>
          </div>
          <div className="humidity-wind">
            <div className="humidity">
              <h4>HUMIDITY</h4>
              <span>64%</span>
            </div>
            <span className="hw-seperated-line"></span>
            <div className="wind">
              <h4>WIND</h4>
              <span>12 K/M</span>
            </div>
          </div>
        </div>
      </div>

      {/* left twitter feed----- */}
      <div className="botom-part">
        <div className="left-part">
          <div className="twitter-feed">
            <FaTwitter className="twitter-logo" />
            <h3>Twitter Feed </h3>
            <span className="cityhashtag">#France</span>
          </div>

          <div className="twitter-news">
            <div className="twitter-feed-words">
              <FaCircle className="grey-circle" />
              <p>Don't forget your sunscreen tomorrow! </p>
            </div>
            <div className="twitter-feed-words">
              <FaCircle className="grey-circle" />{" "}
              <p>Amazing weather in Paris!</p>
            </div>
          </div>

          <div className="next-div">
            <h4 className="next-text">NEXT</h4>
            <BsFillCaretRightFill className="next-arrow" />
          </div>
        </div>
        {/* weekly weather */}
        <div className="right-part">
          <div className="dayWeather">
            <h3>MON</h3>
            <WiRain className="dayweather-icons" />
            <h4>9°</h4>
            <h6>RAINING</h6>
          </div>
          <div className="dayWeather ">
            <h3>TUE</h3>
            <WiDaySunny className="dayweather-icons" />
            <h4>15°</h4>
            <h6>SUNNY</h6>
          </div>
          <div className="dayWeather  ">
            <h3>WED</h3>
            <WiDayCloudy className="dayweather-icons" />
            <h4>11°</h4>
            <h6>CLOUDY</h6>
          </div>
          <div className="dayWeather  ">
            <h3>THU</h3>
            <WiThunderstorm className="dayweather-icons" />
            <h4>7°</h4>
            <h6>STORM</h6>
          </div>
          <div className="dayWeather">
            <h3>FRI</h3>
            <WiDaySunny className="dayweather-icons" />
            <h4>18°</h4>
            <h6>SUNNY</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
