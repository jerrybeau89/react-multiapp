import React from "react";
import FiveDay from "./FiveDay";
import Today from "./Today";

function Forecast({currentWeather, fiveDayForecast, cityName}) {
  return (
    <>
      <section className="todaysForecast">
         Today's Forecast:{cityName}
        <Today weatherData={currentWeather}/>
      </section>
      <section className="fiveDayForecast">
        5-day Forecast:
        <FiveDay fiveDayData={fiveDayForecast}/>
      </section>
    </>
  );
}

export default Forecast;
