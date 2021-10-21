import React, {useReducer} from "react";

const initialState = {
  num1: 0,
  num2: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increase1":
      return {...state, num1: state.num1 + action.amount};
    case "Decrease1":
      return {...state, num1: state.num1 - action.amount};
    case "Increase2":
      return {...state, num2: state.num2 + action.amount};
    case "Decrease2":
      return {...state, num2: state.num2 - action.amount};
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default function NewCounter() {
  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Number1 : {number.num1}</h1>
        <button onClick={() => dispatch({type: "Increase1", amount: 1})}>Increase</button>
        <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
        <button onClick={() => dispatch({type: "Decrease1", amount: 1})}>Decrease</button>
      </div>
      <hr />
      <div>
        <h1>Number2 : {number.num2}</h1>
        <button onClick={() => dispatch({type: "Increase2", amount: 3})}>Increase</button>
        <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
        <button onClick={() => dispatch({type: "Decrease2", amount: 3})}>Decrease</button>
      </div>
    </>
  );
}
