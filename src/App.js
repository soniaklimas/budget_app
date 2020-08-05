import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Navigation } from "./components"; // odnoszę się do index.js w components

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
