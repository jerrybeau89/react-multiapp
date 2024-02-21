const getWeatherIconUrl = (iconId) => {
  const base_url = "http://openweathermap.org/img/wn/";
  const icon_filename = `${iconId}.png`;
  return `${base_url}${icon_filename}`;
};

export default getWeatherIconUrl;