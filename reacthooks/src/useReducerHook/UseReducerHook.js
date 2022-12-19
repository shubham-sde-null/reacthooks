import React, { useReducer } from "react";
import "./UseReducerHook.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div className="useReducer">
      <h1>The Count is:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Increase
      </button>
      {state.showText && (
        <h3>
          This is a text which will hide and appear on the click of button
        </h3>
      )}
    </div>
  );
}
export default UseReducerHook;
