import React, { useState, useEffect } from "react";
import BinarySearchTreeApp from "./components/BinarySearchTreeApp";
//Yiyefang@2021-08-14
// The app arrows can only support within tree level of 5

const App = () => {
  const [number, setNumber] = useState("");
  const max = 100;
  const min = -100;
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="App"
      onKeyDown={handleKeyDown}
      style={{ textAlign: "center", margin: " 20px auto" }}
    >
      Press space and generate the random number {number}
      <BinarySearchTreeApp number={number} />
    </div>
  );
};

export default App;
