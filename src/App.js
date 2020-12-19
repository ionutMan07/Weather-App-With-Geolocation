import React, { useState } from 'react';
import { SearchByCityAPI } from './shared/SearchByCityAPI';
import { SearchByCoordAPI } from './shared/SearchByCoordAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [message, setMessage] = useState('Search by city name or location');

  const searchCity = async (e) => {
    if (e.key === 'Enter' || city.length > 2) {
      const data = await SearchByCityAPI(city);
      setWeather(data);
    }
  };

  const searchCityByCoord = async (position) => {
    const data = await SearchByCoordAPI(position);
    setWeather(data.list[0]);
  };

  const onError = () => {
    setMessage('Unable to locate');
  };

  const locate = () => {
    navigator.geolocation.getCurrentPosition(searchCityByCoord, onError);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={searchCity}
          ></input>
          <button onClick={searchCity}>
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
          <button onClick={locate}>
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
        {typeof weather.main != 'undefined' ? (
          <div className="weather">
            <h2 className="city mt-3">Weather in {weather.name}</h2>
            <div className="temp col d-flex ">
              <h1>{Math.round(weather.main.temp)}°C</h1>
            </div>
            <h3 className="mt-2 ml-2">
              feels like: {Math.round(weather.main.feels_like)}°C
            </h3>
            <img
              className="icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].icon}
            />
            <div className="decription">{weather.weather[0].main}</div>
            <div className="humidity">Humidity: {weather.main.humidity}%</div>
            <div className="wind">Wind speed {weather.wind.speed} km/h</div>
          </div>
        ) : (
          <div>{message}</div>
        )}
      </div>
    </div>
  );
}

export default App;
