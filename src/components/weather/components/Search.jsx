import React, { useEffect, useState } from 'react'
import History from './History';

function Search({getWeather, searchList}) {
  const [cityName, setCityName] = useState("");

  const handleSearch = () => {
    if (cityName.trim() !== "") {
      updateSearchHistory(cityName.charAt(0).toUpperCase() + cityName.slice(1));
      setCityName("");
      getWeather(cityName);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  },[]);

  const updateSearchHistory = (city) => {
    const updatedSearchList = [city, ...searchList];
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchList));
  };
  return (
    <div className="container">
      <h3>Search for a City:</h3>
      <input
        type="search"
        id="search-input"
        className="weatherSearch"
        placeholder="City name..."
        autoComplete='on'
        autoFocus
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        id="search-btn"
        className="weatherSearchBtn"
        type='submit'
        onClick={handleSearch}
      >
        Search
      </button>
      <History searchList={searchList} getWeather={getWeather}/>
    </div>
  );
}

export default Search