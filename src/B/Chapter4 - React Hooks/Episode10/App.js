import React, {useState} from "react";
import ComA from "./ComA";

export default function App() {
  const [name, setName] = useState("John");
  return (
    <div>
      <ComA name={name} />
    </div>
  );
}
