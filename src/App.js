import "./App.css";

import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import DailyWeather from "./components/DailyWeather";

function App() {
  return (
    <div className="container">
      {/* weather detail */}
      <div className="top-part  ">
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
        <DailyWeather />
      </div>
    </div>
  );
}

export default App;
