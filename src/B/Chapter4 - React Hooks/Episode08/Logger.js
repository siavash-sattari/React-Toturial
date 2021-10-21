import React, {useState, useEffect} from "react";

export default function Logger() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(number);
    return () => console.log("The Logger componnet is removed from DOM");
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber((prevState) => prevState + 1)}>Increase</button>
    </div>
  );
}
