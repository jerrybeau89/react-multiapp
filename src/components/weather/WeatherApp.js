import React from "react";
import "./assets/styles.css"


function WeatherApp() {

  const handleClick = (e) => {
    e.preventDefault();
 
  }
  return (
    <div class="">
      <header class="weatherHeader">
        <h1>Weather Dashboard</h1>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-sm-3 my-3 text-start">
            <h3>Search for a City:</h3>
            <input
              type="text"
              id="search-input"
              class="form-input w-100"
              placeholder="City name..."
            />
            <button
              id="search-btn"
              class="weatherSearchBtn"
              // type="submit"
              onClick={handleClick}
            >
              Search
            </button>
            <br />
            <br />
            <div id="search-history"></div>
          </div>

          <div class="col-sm-9">
            <div class="row">
              <div class="col-12 text-start border my-3">
                <div id="todays-results"></div>
              </div>
              <div class="col-12  text-start">
                <h6>
                  5-day forecast:<span id="result-text"></span>
                </h6>
                <div class="row" id="content-results"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
