import "./tabStyles.css";
import React from "react";

function TabContent({ tabs, activeTab }) {
  const ActiveComponent = tabs[activeTab].component;
  
  return (
    <div className="tabContainer">
      <ActiveComponent />
    </div>
  );
}

export default TabContent;
