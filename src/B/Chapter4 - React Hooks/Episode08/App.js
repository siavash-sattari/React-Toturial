import React, {useState} from "react";
import Logger from "./Logger";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(false)}>Delete</button>
      {show && <Logger />}
    </div>
  );
}
