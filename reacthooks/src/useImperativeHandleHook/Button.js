import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Button.css";
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div className="button">
      <button>Button From Child</button>
      {toggle && <span>toggle</span>}
    </div>
  );
});

export default Button;
