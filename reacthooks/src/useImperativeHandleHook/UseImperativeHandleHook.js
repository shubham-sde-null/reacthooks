import React, { useRef } from "react";
import Button from "./Button";
import "./UseImperativeHandleHook.css";
function UseImperativeHandleHook() {
  const buttonRef = useRef(null);
  return (
    <div className="useImperative">
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default UseImperativeHandleHook;
