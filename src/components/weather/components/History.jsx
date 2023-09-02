import React from "react";

function History({ searchList, getWeather }) {
  return (
    <div id="weatherSearchHistory">
      {searchList.map((item, index) => (
        <button 
          key={index}
          className="historyListItem"
          onClick={() => getWeather(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default History;
