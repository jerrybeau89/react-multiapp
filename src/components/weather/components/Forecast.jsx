import React from "react";
import FiveDay from "./FiveDay";
import Today from "./Today";

function Forecast({currentWeather, fiveDayForecast}) {
  return (
    <>
      <section className="todaysForecast">
         Today's Forecast:
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
