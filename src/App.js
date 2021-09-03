import "./App.css";

import { FaTwitter, FaCircle } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";

import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";

function App() {
  return (
    <div className="container">
      {/* weather detail */}
      <CurrentWeather />
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
