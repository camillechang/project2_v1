import React from "react";
import Axios from "axios";

const defaultCity = process.env.REACT_APP_CITY;
const apiKey = process.env.REACT_APP_APIKEY;
const units = process.env.REACT_APP_UNIT; //show temperature in C


class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curentWeatherData: [],
      cityName: props.cityName,
    };
    // console.log("cconstructor---defaultCity:", defaultCity);

    // console.log("currentweather cityname:", this.state.cityName);
    // console.log("currentweather props:", props.cityName);
    this.getDataviaAxios = this.getDataviaAxios.bind(this);
  }

  componentDidMount() {
    this.getDataviaAxios();
  }

  componentDidUpdate(prevProps) {

    if (this.props.cityName !== prevProps.cityName) {
      // this.fetchData(this.props.userID);
      this.getDataviaAxios();
    }
  }
  getDataviaAxios = () => {
    let cityName = defaultCity;
    if (!!this.props.cityName) {//exists
      cityName = this.props.cityName;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`
    // console.log("getDataviaAxios--url----:", url);


    Axios.get(url).then((response) => {
      // handle success
      let data = response.data;
      console.log(data);

      let sortedItems = {
        temperature: data.main.temp, //get 00.0
        weather: data.weather[0].main,
        humidity: data.main.humidity,
        speed: data.wind.speed
      };
      // console.log(sortedItems)


      // let sortedItems = { temp, weather, humidity, speed };
      this.setState({ curentWeatherData: sortedItems });
    });
  };

  getTemp = (temp1) => {
    // temp1="24.53";
    let temp = parseFloat(temp1);

    let currentTemp = temp.toFixed(1);
    // console.log("temp : " + currentTemp);
    return currentTemp;
  };




  render() {
    // cityName = this.state.cityName;
    // console.log("render------");
    // console.log(this.state.curentWeatherData);
    // console.log(url);
    // this.getDataviaAxios();
    return (
      <div className="current_weather--main">
        <h3 className="current_weather--city" >
          {this.props.cityName}
        </h3>
        <div className="current_weather--body">
          <div className="current_weather--temp">
            <h2 className="current_weather--h2">{this.state.curentWeatherData.temperature}°</h2>
            <div className="current_weather--description">
              {this.state.curentWeatherData.weather}
            </div>
          </div>
          <div className="current_weather--hw">
            <div className="current_weather--humidity">
              <h4>HUMIDITY</h4>
              <span>{this.state.curentWeatherData.humidity}%</span>
            </div>
            <span className="hw-seperated-line"></span>
            <div className="current_weather--wind">
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
