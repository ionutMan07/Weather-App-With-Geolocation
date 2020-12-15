import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const searchCity = (searchValue) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`;
  return axios.get(URL);
};
