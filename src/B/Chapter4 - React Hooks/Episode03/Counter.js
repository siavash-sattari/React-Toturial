import React, {useState} from "react";

export default function Counter() {
  const [name, setName] = useState("John");
  const [number, setNumber] = useState(0);

  const nameHandler = () => {
    setName("Jack");
  };

  const numberHandler = () => {
    // setNumber(number + 1);
    setNumber((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={nameHandler}>Change Name</button>
      <h1>{number}</h1>
      <button onClick={numberHandler}>Change Number</button>
    </div>
  );
}
