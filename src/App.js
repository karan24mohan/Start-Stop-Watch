import "./App.css";
import React, { useState } from "react";
let watch;
function App() {
  const [timer, settimer] = useState(0);
  const [start, setstart] = useState(false);
  const startWatch = () => {
    watch = setInterval(() => {
      settimer((time) => time + 1);
      setstart(true);
    }, 1000);
  };
  const stopWatch = () => {
    clearInterval(watch);
    setstart(false);
  };
  const resetWatch = () => {
    settimer(0);
    setstart(false);
    clearInterval(watch);
  };
  return (
    <div className="App">
      <h1>Start Stop Watch</h1>
      <h2>{timer}</h2>
      <div>
        <button className="startButton" disabled={start} onClick={startWatch}>
          Start
        </button>
        <button className="stopButton" onClick={stopWatch}>
          Stop
        </button>
        <button className="resetButton" onClick={resetWatch}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
