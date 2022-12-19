import React, { useEffect, useState } from "react";
import "./UseEffectHook.css";

// function UseEffectHook() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);
//   return (
//     <div className="timer">
//       <h1>
//         The timer runned for <span>{count}</span> count{count > 1 ? "s" : ""}
//       </h1>
//     </div>
//   );
// }
function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <div className="timer">
      {" "}
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <h1>Calculation: {calculation}</h1>
    </div>
  );
}

export default UseEffectHook;
