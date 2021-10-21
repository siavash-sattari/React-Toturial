import React, {useContext} from "react";
import ComC from "./ComC";
import {nameContext} from "./App";

export default function ComB() {
  const name = useContext(nameContext);
  return (
    <div>
      {name}
      <ComC />
    </div>
  );
}
