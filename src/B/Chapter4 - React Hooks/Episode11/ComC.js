import React, {useContext} from "react";
import {ageContext, nameContext} from "./App";

export default function ComC() {
  const name = useContext(nameContext);
  const age = useContext(ageContext);

  return (
    <div>
      <h1>
        Component C : {name} - Age : {age}
      </h1>
    </div>
  );
}
