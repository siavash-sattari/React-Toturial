import React, {useMemo, useState} from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState(0);

  // const slow = () => {
  //   for (let i = 0; i < 1000000000; i++) {}
  //   return show;
  // };

  const slow = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return show;
  }, [show]);

  const showHandler = () => {
    setShow(!show);
  };

  const numberHandler = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <button onClick={showHandler}>show-hide</button>
      <span>{slow ? "Slow" : "Hide"}</span>
      <hr />
      <button onClick={numberHandler}>+</button>
      <span>{number}</span>
    </div>
  );
}
