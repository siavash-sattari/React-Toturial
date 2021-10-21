import React, {useState} from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increaseHandler = () => {
    setNumber(number + 1);
  };
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}
