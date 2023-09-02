const apiKey = "d3722239d97657959cb1778dc4943cd3";

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
    const fiveDayForecast = forecastData.list.map((item) => ({
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

// export function getWeatherUpdate(cityName) {
//   const apiURL = "https://api.openweathermap.org/data/2.5/forecast?";

//   const capitalCity = (cityName) => {
//     return cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
//   };

//   const cityURL = (cityName) => {
//     return apiURL + "q=" + cityName + apiKey;
//   };

//   const latLonURL = function (data) {
//     return apiURL + "lat=" + data.coord.lat + "&lon=" + data.coord.lon + apiKey;
//   };

//   const getCityWeather = (fromHistory, historicVal) => {
//     const citySearch = fromHistory ? historicVal : cityName;

//     fetch(cityURL(citySearch))
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           alert(
//             "Error: " +
//               response.status +
//               ` ${cityName} not valid. Please try again.`
//           );
//           return Promise.reject("Error: " + response.status);
//         }
//       })
//       .then(function (data) {
//         const todaysWeather = data;

//         if (!fromHistory) {
//           addToHistory(todaysWeather.name);
//         }
//         addToday();
//         forecastToday(todaysWeather);
//       });
//   };

//   function getCityForecast() {
//     fetch(latLonURL(todaysWeather.coord.lat, todaysWeather.coord.lon))
//       .then(function (response) {
//         if (response.ok) {
//           return response.json();
//         } else {
//           alert(
//             "Error: " +
//               response.status +
//               ` ${cityName} not valid. Please try again.`
//           );
//           return Promise.reject("Error: " + response.status);
//         }
//       })
//       .then(function (data) {
//         fiveDayWeather = data;
//         addFiveDay();
//         forecastFiveDay(todaysWeather);
//       });
//   }

//   // Add city to search history
//   function addToHistory(cityName) {
//     const searchHistory = getSearchHistory();
//     searchHistory.push(capitalizeCity(cityName));
//     localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//   }

//   // Retrieve search history from local storage
//   function getSearchHistory() {
//     const storedSearchHistory = localStorage.getItem("searchHistory");
//     return storedSearchHistory ? JSON.parse(storedSearchHistory) : [];
//   }
  // function currentDate() {
  //   let dateTime = new Date();
  //   dates = {};
  //   for (let i = 0; i < 6; i++) {
  //     dates[i] = {
  //       dateTime: dateTime,
  //       dateStr:
  //         dateTime.getMonth() +
  //         1 +
  //         "/" +
  //         dateTime.getDate() +
  //         "/" +
  //         dateTime.getFullYear(),
  //     };
  //     dateTime.setDate(dateTime.getDate() + 1);
  //   }
  // }
// }
