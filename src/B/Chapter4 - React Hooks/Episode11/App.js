import React, {useState} from "react";
import ComA from "./ComA";

export const nameContext = React.createContext();
export const ageContext = React.createContext();

export default function App() {
  const [name, setName] = useState("John");
  return (
    <div>
      <nameContext.Provider value={name}>
        <ageContext.Provider value={24}>
          <ComA />
        </ageContext.Provider>
      </nameContext.Provider>
    </div>
  );
}
