import React, { useState, useCallback } from "react";
import "./UseCallbackHook.css";
import List from "./List";
function UseCallbackHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div className="useCallback" style={themeStyles}>
      <input
        type="Number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevData) => !prevData)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallbackHook;
