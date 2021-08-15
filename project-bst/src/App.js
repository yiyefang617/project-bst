import React, { useState, useEffect } from "react";
import BinarySearchTreeApp from "./components/BinarySearchTreeApp";

const App = () => {
  const [number, setNumber] = useState("");
  const max = 100;
  const min = -100;
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      console.log("Submit Button   Pressed");
      setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="App"
      onKeyDown={handleKeyDown}
      style={{ textAlign: "center" }}
    >
      The random number is {number}
      <BinarySearchTreeApp number={number} />
    </div>
  );
};

export default App;
