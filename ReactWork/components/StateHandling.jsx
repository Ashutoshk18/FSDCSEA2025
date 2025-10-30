import React, { useState } from "react";
function StateHandling() {
  const [counter, setCounter] = useState(20);
  const [width, setWidth] = useState(200);
  const [background, setBackground] = useState("#ffffff");
  const [rot, setRotate] = useState(0);
  function increaseCounter() {
    setCounter(counter + 5);
  }
  function changeBackground() {
    console.log("changed the color");
    setBackground("#F54927");
  }
  function increaseWidth() {
    setWidth(width + 5);
  }
  function rotateImage() {
    setRotate(rot + 1);
  }
  return (
    // <div>Helo </div>
    <div>
      <h2>Counter Value = {counter}</h2>
      <button onClick={increaseCounter}>Increase Value</button>
      <div>
        <div
          style={{
            backgroundColor: background,
            padding: "32px",
            transform: `rotate(${rot}deg)`,
          }}
        >
          <img
            src="https://cdn.kastatic.org/ka-perseus-graphie/1e7a7538a671be543cbf878eadb48e0e4f263125.svg"
            alt="box"
            style={{ width: `${width}px` }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button onClick={changeBackground}>Background</button>
          <button onClick={increaseWidth}>Width++</button>
          <button onClick={rotateImage}>Rotate Image</button>
        </div>
      </div>
    </div>
  );
}
export default StateHandling;
