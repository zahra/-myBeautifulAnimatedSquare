import React, { useState } from "react";

const MySquare = () => {
  const [square, setSquare] = useState("App-myBlueSquare");
  //   console.log("is it in this component yet?");

  const handleColorChange = () => {
    let switchColor;
    if (square === "App-myBlueSquare") {
      switchColor = "App-myRedSquare";
      console.log("is this red");
    } else {
      switchColor = "App-myBlueSquare";
      console.log("is this blue");
    }
    setSquare(switchColor);
  };

  return <div onClick={handleColorChange} className={square}></div>;
};

export default MySquare;
