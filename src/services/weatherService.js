const API_KEY = "7d972b28fc95af77fe1871b15c651a67";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const getFormattedWeatherData = (searchParams) => {
    const fotmattedCurrentWeather = await getWeatherData('weather')
}