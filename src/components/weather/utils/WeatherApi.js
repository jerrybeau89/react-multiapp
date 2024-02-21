import moment from "moment";
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

export async function getWeatherUpdate(cityName) {
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

  try {
    // Fetch current weather data
    const currentWeatherResponse = await fetch(currentWeatherURL);
    const currentWeatherData = await currentWeatherResponse.json();

    // Fetch forecast data
    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();

    // Process current weather data
    const currentWeather = {
      temperature: currentWeatherData.main.temp,
      windSpeed: currentWeatherData.wind.speed,
      humidity: currentWeatherData.main.humidity,
      icon: currentWeatherData.weather[0].icon,
    };

    // Process five-day forecast data
    const fiveDayForecast = forecastData.list
      .filter((item) => {
        return moment(item.dt_txt).format("HH:mm:ss") === "12:00:00";
      })
      .map((item) => ({
        date: item.dt_txt,
        temperature: item.main.temp,
        windSpeed: item.wind.speed,
        humidity: item.main.humidity,
        icon: item.weather[0].icon,
      }));

    return { currentWeather, fiveDayForecast };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
