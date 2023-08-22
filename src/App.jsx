import { useState } from "react";
import "./App.css";
import Tab from "./Tab";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";

function App() {
  const [tabs, setTabs] = useState([
    { page: <Page1 />, selected: false, id: "tab-1", name: "Page1" },
    { page: <Page1 />, selected: true, id: "tab-3", name: "Page1" },
    { page: <Page2 />, selected: false, id: "tab-2", name: "Page2" },
  ]);

  const selectTab = (tabId) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === tabId) return { ...tab, selected: true };
      else if (tab.selected) return { ...tab, selected: false };
      else return tab;
    });
    setTabs(newTabs);
  };

  return (
    <div className='App'>
      <Tab tabs={tabs} selectTab={selectTab} />
      {tabs.map(({ page, selected, id }) => (
        <div style={{ visibility: selected ? "visible" : "hidden" }} key={id}>
          {page}
        </div>
      ))}
    </div>
  );
}

export default App;
