import React from "react";
import ComB from "./ComB";

export default function ComA(props) {
  return (
    <div>
      <ComB name={props.name} />
    </div>
  );
}
