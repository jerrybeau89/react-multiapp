import React, { useEffect, useState } from "react";
import { getWeatherUpdate } from "./assets/WeatherApi";
import "./assets/styles.css";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function WeatherApp() {

  const [searchList, setSearchList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  const [cityName, setCityName] = useState('');

  useEffect(() => { 
    const storedSearchHistory = localStorage.getItem('searchHistory');
    if(storedSearchHistory){
      setSearchList(JSON.parse(storedSearchHistory));
    }
  }, [])
  const handleGetWeather = async (cityName) => {
    setCityName(cityName);
    try{
      const {currentWeather, fiveDayForecast } = await getWeatherUpdate(cityName);
      setCurrentWeather(currentWeather)
      setFiveDayForecast(fiveDayForecast)
    } catch (error) {
      alert("Error getting weather Data.", error)
    }
  };
  return (
    <>
      <header className="weatherHeader">
        <h1>Weather Dashboard</h1>
      </header>
      <div className="weatherApp">
        <aside className="searchContainer">
          <Search getWeather={handleGetWeather} searchList={searchList}/>
        </aside>
        <main className="forecastContainer">
          <Forecast currentWeather={currentWeather} fiveDayForecast={fiveDayForecast} cityName={cityName}/>
        </main>
      </div>
    </>
  );
}

export default WeatherApp;
