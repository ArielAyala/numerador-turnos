import React from "react";
import ReactDOM from "react-dom";

import Numerador from "./Numerador";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Numerador />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
