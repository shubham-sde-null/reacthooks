import React, { useLayoutEffect, useEffect, useRef } from "react";
import "./UseLayouthook.css";
function UseLayouthook() {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(
      "useLayout runs before page gets rendered:",
      inputRef.current.value
    );
  }, []);
  useEffect(() => {
    inputRef.current.value = "PAWAR";
    console.log(
      "useEffect runs after page gets rendered:",
      inputRef.current.value
    );
  }, []);
  return (
    <div className="useLayout">
      <input
        type="text"
        ref={inputRef}
        value="SHUBHAM"
        placeholder="enter name"
      />
    </div>
  );
}
export default UseLayouthook;
