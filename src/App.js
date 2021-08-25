// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      {/* weather detail */}
      <div className="weather-detail">
        <h2>12 </h2>
        <h4>Cloudy</h4>
        <h3 className="city-name">FRANCE</h3>
        <div>
          <label>Humidity</label>
          <label>14%</label>
        </div>
        <div>
          <label>Wind</label>
          <label>12 K/M</label>
        </div>
      </div>

      {/* left part */}
      <div className="bottomdetail">
        <div className="leftpart">
          <div>Twitter Feed</div>
          <label>ddd</label>
          <label>ddd</label>
          <div>Next</div>
        </div>
        {/* weekly weather */}
        <div className="rightpart">
          <div className="dayWeather">
            <label>MON</label>
            <label>picture</label>
            <label>Raining</label>
            <label>9'</label>
          </div>
          <div className="dayWeather">
            <label>MON</label>
            <label>picture</label>
            <label>Raining</label>
            <label>9'</label>
          </div>
          <div className="dayWeather">
            <label>MON</label>
            <label>picture</label>
            <label>Raining</label>
            <label>9'</label>
          </div>
          <div className="dayWeather">
            <label>MON</label>
            <label>picture</label>
            <label>Raining</label>
            <label>9'</label>
          </div>
          <div className="dayWeather">
            <label>MON</label>
            <label>picture</label>
            <label>Raining</label>
            <label>9'</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
