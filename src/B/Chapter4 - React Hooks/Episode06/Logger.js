import React, {useState, useEffect} from "react";

export default function Logger() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => console.log(number1), [number1]);

  return (
    <div>
      <h1>{number1}</h1>
      <button onClick={() => setNumber1((prevState) => prevState + 1)}>Increase</button>
      <h1>{number2}</h1>
      <button onClick={() => setNumber2((prevState) => prevState + 1)}>Increase</button>
    </div>
  );
}
