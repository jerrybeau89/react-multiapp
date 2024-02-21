import React from "react";
import getWeatherIconUrl from '../utils/icon'

function FiveDay({ fiveDayData }) {

  if (!fiveDayData) {
    return <p>Loading...</p>;
  }
  return (
    <div className="fiveDayContainer">
      {fiveDayData.map((day, index) => (
        <div className="fiveDayForecastData" key={index}>
          <h3>{day.date}</h3>
          <img src={getWeatherIconUrl(day.icon)} alt={day.weatherDescription} />
          <p id="todaysTemp">Temp: {day.temperature} &#176;F </p>
          <p id="todaysWind">Wind: {day.windSpeed} MPH</p>
          <p id="todaysHumidity">Humidity: {day.humidity} %</p>
        </div>
      ))}
    </div>
  );
}

export default FiveDay;
