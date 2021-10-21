import React, {useReducer} from "react";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default function Counter() {
  const [number, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => dispatch("Increase")}>Increase</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <button onClick={() => dispatch("Decrease")}>Decrease</button>
    </div>
  );
}
