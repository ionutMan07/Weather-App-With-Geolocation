import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/find';
const apiKey = process.env.REACT_APP_API_KEY;

export const SearchByCoordAPI = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  if (lat || lon === Number) {
    const { data } = await axios.get(URL, {
      params: {
        lat: lat,
        lon: lon,
        cnd: 1,
        units: 'metric',
        appid: apiKey,
      },
    });
    return data;
  }
};
