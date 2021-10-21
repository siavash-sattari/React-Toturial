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
  const [number1, dispatch1] = useReducer(reducer, initialState);
  const [number2, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Number 1 : {number1}</h1>
        <button onClick={() => dispatch1("Increase")}>Increase</button>
        <button onClick={() => dispatch1("Reset")}>Reset</button>
        <button onClick={() => dispatch1("Decrease")}>Decrease</button>
      </div>
      <hr />
      <div>
        <h1>Number 2 : {number2}</h1>
        <button onClick={() => dispatch2("Increase")}>Increase</button>
        <button onClick={() => dispatch2("Reset")}>Reset</button>
        <button onClick={() => dispatch2("Decrease")}>Decrease</button>
      </div>
    </>
  );
}
