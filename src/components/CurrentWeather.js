import React from "react";

const cityName = "France";
const apiKey = "0cf172e803d3e760c17228daccbd18a6";
const units = "metric"; //show temperature in C
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curentWeatherData: [],
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(url)
      .then((response) => {
        return response.json(); //this needs return, otherwise undefined
      })
      .then((data) => {
        console.log(typeof data);
        console.log("CurrentWeather------");
        console.log(data);
        //current weather
        const weather = data.weather[0].main;
        console.log(weather);
        //currentTemp
        const temp = this.getTemp(data.main.temp);
        console.log(temp); //get 00.0
        //humidity
        const humidity = data.main.humidity;
        console.log(humidity);
        //wind speed
        const speed = data.wind.speed;
        console.log(speed);

        let sortedItems = { temp, weather, humidity, speed };
        this.setState({ curentWeatherData: sortedItems });
      });
  }
  getTemp = (temp1) => {
    // temp1="24.53";
    let temp = parseFloat(temp1);

    let currentTemp = temp.toFixed(1);
    console.log("temp : " + currentTemp);
    return currentTemp;
  };
  render() {
    return (
      <div className="top-part  ">
        <h3 className="city-location">FRANCE</h3>
        <div className="today-detail">
          <div className="today-weather">
            <h2 className="today-temp">{this.state.curentWeatherData.temp}°</h2>
            <div className="today-temp1">
              {this.state.curentWeatherData.weather}
            </div>
          </div>
          <div className="humidity-wind">
            <div className="humidity">
              <h4>HUMIDITY</h4>
              <span>{this.state.curentWeatherData.humidity}%</span>
            </div>
            <span className="hw-seperated-line"></span>
            <div className="wind">
              <h4>WIND</h4>
              <span>{this.state.curentWeatherData.speed}K/M</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CurrentWeather;
