import React from "react";
import { useState } from "react";
import "./UseStateHook.css";
function UseStateHook() {
  console.log("state changed");
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <div className="counter1">
        <button onClick={decrement}>Increment</button>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default UseStateHook;
