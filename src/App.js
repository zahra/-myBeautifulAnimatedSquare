import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MySquare from "./components/MySquare";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MySquare />
      </header>
    </div>
  );
}

export default App;
