import React, { useEffect, useState } from "react";
import { getWeatherUpdate } from "./utils/WeatherApi";
import "./assets/styles.css";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function WeatherApp() {

  const [searchList, setSearchList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  useEffect(() => { 
    const storedSearchHistory = localStorage.getItem('searchHistory');
    if(storedSearchHistory){
      setSearchList(JSON.parse(storedSearchHistory));
    }
  }, [])
  const handleGetWeather = async (cityName) => {
    try{
      const {currentWeather, fiveDayForecast } = await getWeatherUpdate(cityName);
      setCurrentWeather(currentWeather)
      setFiveDayForecast(fiveDayForecast)
      updateSearchHistory(cityName.charAt(0).toUpperCase() + cityName.slice(1));
    } catch (error) {
      alert("Error getting weather Data.", error)
    }
  };

  const updateSearchHistory = (city) => {
    const updatedSearchList = [city, ...searchList];
    setSearchList(updatedSearchList);
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchList));
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
          <Forecast currentWeather={currentWeather} fiveDayForecast={fiveDayForecast} />
        </main>
      </div>
    </>
  );
}

export default WeatherApp;
