import "./tabStyles.css";
import React from "react";

function TabNav({tabs, activeTab, setActiveTab}) {
  return (
    <div className="tabContainer">
      <div className="bloc-tabs">
        {tabs.map((tab, index) => (
          <button
          key={index}
          className={activeTab === index ? "tabs active-tabs" : "tabs"}
          onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabNav;
