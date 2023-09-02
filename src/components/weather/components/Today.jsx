import React from "react";

function Today({ weatherData }) {
  if (!weatherData){
    return <p>Loading...</p>;
  }
  return (
    <div className="todayContainer">
        <div className="todaysForecastData">
          <img src={weatherData.iconURL} alt={weatherData.weatherDescription} />
          <p id="todaysTemp">Temp: {weatherData.temperature} &#176;F</p>
          <p id="todaysWind">Wind: {weatherData.windSpeed} MPH</p>
          <p id="todaysHumidity">Humidity: {weatherData.humidity} %</p>
        </div>
    </div>
  );
}

export default Today;
