import React, { useState, useMemo } from "react";
import "./UseMemoHook.css";
function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  function slowFunction(number) {
    console.log("calling the slow function");
    for (let i = 0; i <= 2000000000; i++) {}
    return number * 2;
  }
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div className="useMemo">
      <input
        type="Number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevData) => !prevData)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default UseMemoHook;
