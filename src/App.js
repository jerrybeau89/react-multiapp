import React, { useState } from 'react';
import TabNav from "./tabs/TabNav";
import TabContent from './tabs/TabContent';
import { tabs } from './tabs/TabComponents';
import './App.css'


const App = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <TabNav
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      />
      <TabContent tabs={tabs} activeTab={activeTab}/>
    </>
  );
}

export default App;

