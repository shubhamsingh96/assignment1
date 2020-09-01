import React, { useState } from "react";
import "./App.css";
import "./Assignment";

function App() {
  const [state, setState] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  
  const handleUserClicks = () => {
    const HexValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++){
      color += HexValue[Math.floor(Math.random() * HexValue.length)];
    }
    setBackgroundColor(color)
    setState((prevState) => prevState + 1);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="container">
        <button className="button" onClick={handleUserClicks}>
          Button
        </button>
        {state > 0 && <div className="badge">{state}</div>}
      </div>
    </div>
  );
}

export default App;
