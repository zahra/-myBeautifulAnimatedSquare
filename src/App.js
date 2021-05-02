import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MySquare from "./components/MySquare";

function App() {
  const [square, setSquare] = useState("App-myBlueSquare");
  // console.log(square);

  const handleColorChange = () => {
    // console.log("Please change the value of the state with this new value");
    // console.log(square);

    let switchColor;
    if (square === "App-myBlueSquare") {
      switchColor = "App-myRedSquare";
      console.log("is this red");
    } else {
      switchColor = "App-myBlueSquare";
      console.log("is this blue");
    }
    setSquare(switchColor);

    // if (square === "App-myBlueSquare") {
    //   switchColor = "App-myRedSquare";
    // } else {
    //   switchColor = "App-myBlueSquare";
    // }
    // setSquare(switchColor);

    // let newColor =
    //   square === "App-myBlueSquare" ? "App-myRedSquare" : "App-myBlueSquare";
    // setSquare(newColor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleColorChange} className={square}></div>
      </header>
    </div>
  );
}

export default App;
