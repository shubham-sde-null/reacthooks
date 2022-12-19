import React, { useRef } from "react";
import "./UseRefHook.css";
function UseRefHook() {
  const inputRef = useRef(null);
  const bringFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="useReducer">
      <input
        type="text"
        name=""
        id=""
        placeholder="enter your name"
        ref={inputRef}
      />
      <button onClick={bringFocus}>Change Name</button>
    </div>
  );
}

export default UseRefHook;
