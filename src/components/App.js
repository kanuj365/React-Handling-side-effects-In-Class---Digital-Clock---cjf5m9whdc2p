import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  const [date, setdate] = useState("");
  const updateTime = () => {
    let tempTime = new Date().toLocaleString();
    setdate(tempTime);
  };

  useEffect(() => {
    let tempTime = new Date().toLocaleString();
    setdate(tempTime);
    let ret = setInterval(updateTime, 1000);
    return () => {
      clearInterval(ret);
    };
  }, []);

  return (
    <div id="main">
      <div className="date-time"> {date}</div>
    </div>
  );
};

export default App;
