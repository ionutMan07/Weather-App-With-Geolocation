import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

const searchCity = (query) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
  return axios.get(URL).then((res) => setWeather(res));
};

const getWeatherbyLocation = (e) => {
  const URL = `https://api.openweathermap.org/data/2.5/find?lat='${lat}&lon=${lon}&units=metric&&cnd=1&appid=${apiKey}`;
  return axios.get(URL);
};
var getWeatherByLocation = function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`latitude: ${lat} / longitude: ${lon}`);
  if (lat || lon === Number) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/find?lat=';
    requestUrl +=
      lat + '&lon=' + lon + '&cnd=1&appid=' + API_KEY + '&units=metric';
    console.log(requestUrl);
    fetch(requestUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        console.log(result);
        var temp = Math.ceil(result.list[0].main.temp);
        var city = result.list[0].name;
const locate = () => {
  navigator.geolocation.getCurrentPosition(getWeatherByLocation, onError);
};
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({})

  useEffect(() => {
    searchCity(city).then((res) => setCity(res.data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search city"
          ></input>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clip-rule="evenodd"
                width="1.5em"
                height="1.5em"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 12 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                width="1.5em"
                height="1.5em"
              ></path>
            </svg>
          </button>
        </div>
        <div className="weather">
          <h2 className="city mt-3">Weather in </h2>
          <div className="temp col d-flex ">
            <h1>51°C</h1>
            <h3 className="mt-2 ml-4">feels like: 22°C</h3>
          </div>
          <img className="icon" src="" alt="" />
          <div className="decription">Cloudy</div>
          <div className="humidity">Humidity: 60%</div>
          <div className="wind">Wind speed 6.2 km/h</div>
        </div>
      </div>
    </div>
  );
}

export default App;
