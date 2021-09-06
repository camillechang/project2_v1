import React from "react";
import Axios from "axios";

let cityName = "Canberra";
const apiKey = "0cf172e803d3e760c17228daccbd18a6";
const units = "metric"; //show temperature in C
class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curentWeatherData: [],
      cityName: props.cityName,
    };
    console.log("cconstructor---");

    console.log("currentweather cityname:", props.cityName);
    // this.getData = this.getData.bind(this);
    this.getDataviaAxios = this.getDataviaAxios.bind(this);
  }

  componentDidMount() {
    // this.getData();
    this.getDataviaAxios();
  }


  // shouldComponentUpdate(nextProps) {
  //   console.log("1111:", nextProps.key);
  //   console.log("2222:", this.state.key);
  //   if (nextProps.cityName !== this.state.cityName) {

  //     this.setState = {
  //       cityName: nextProps.cityName
  //     }
  //     return true;
  //   }
  //   return false;
  // }
  // getData() {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json(); //this needs return, otherwise undefined
  //     })
  //     .then((data) => {
  //       console.log(typeof data);
  //       console.log("CurrentWeather------");
  //       console.log(data);
  //       //current weather
  //       const weather = data.weather[0].main;
  //       console.log(weather);

  //       const { humidity, temp } = data.main;
  //       //currentTemp
  //       // const temp = this.getTemp(data.main.temp);
  //       console.log(temp); //get 00.0
  //       //humidity
  //       // const humidity = data.main.humidity;
  //       console.log(humidity);
  //       //wind speed
  //       const speed = data.wind.speed;
  //       console.log(speed);

  //       let sortedItems = { temp, weather, humidity, speed };
  //       this.setState({ curentWeatherData: sortedItems });
  //     });
  // }

  getDataviaAxios = () => {
    console.log("getData2-------");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${apiKey}&units=${units}`;

    Axios.get(url).then((response) => {
      // handle success
      let data = response.data;
      console.log(data);

      const weather = data.weather[0].main;
      console.log(weather);

      const { humidity, temp } = data.main;
      //currentTemp
      // const temp = this.getTemp(data.main.temp);
      console.log(temp); //get 00.0
      //humidity
      // const humidity = data.main.humidity;
      console.log(humidity);
      //wind speed
      const speed = data.wind.speed;
      console.log(speed);

      let sortedItems = { temp, weather, humidity, speed };
      this.setState({ curentWeatherData: sortedItems });
    });
  };

  getTemp = (temp1) => {
    // temp1="24.53";
    let temp = parseFloat(temp1);

    let currentTemp = temp.toFixed(1);
    console.log("temp : " + currentTemp);
    return currentTemp;
  };




  render() {
    cityName = this.state.cityName;
    // console.log("-------curentweather render, city:" + cityName);
    // console.log(url);
    // this.getDataviaAxios();
    return (
      <div className="top-part  ">
        <h3 className="city-location" >
          {cityName}
        </h3>
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
