import React, { useState } from "react";
import "./App.css";
import "./Question2_3";


const HEX_CHARACTERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function App() {
  const [state, setState] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleUserClicks = () => {
    let color = '#';
    for (let i = 0; i < 6; i++){
      color += HEX_CHARACTERS[Math.floor(Math.random() * HEX_CHARACTERS.length)];
    }
    setBackgroundColor(color)
    setState((prevState) => prevState + 1);
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <div className="container">
        <button className="button" onClick={handleUserClicks}>
          Button
        </button>
        {state ? <div className="badge">{state}</div> : null}
      </div>
    </div>
  );
}

export default App;
