import React from "react";

function History({ searchList, getWeather }) {
  return (
    <ul id="weatherSearchHistory">
      {searchList.map((item, index) => (
        <button 
          key={index}
          className="historyListItem"
          onClick={() => getWeather(true, item)}
        >
          {item}
        </button>
      ))}
    </ul>
  );
}

export default History;
