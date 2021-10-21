import React, {useState, useEffect, useCallback} from "react";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function App() {
  console.log("App rendered");
  const [valueA, setValueA] = useState("A");
  const [valueB, setValueB] = useState("B");

  const changeHandlerA = useCallback(() => {
    setValueA("AAA");
  }, [valueA]);

  const changeHandlerB = useCallback(() => {
    setValueB("BBB");
  }, [valueB]);

  return (
    <div>
      <ComponentA value={valueA} changeHandler={changeHandlerA} />
      <ComponentB value={valueB} changeHandler={changeHandlerB} />
    </div>
  );
}
