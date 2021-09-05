import React from "react";
import Box from "./Box";

export default function Boxes(props) {
  const boxes = props.boxes.map((box) => {
    if (props.activeBoxes.includes(box.id)) {
      return <Box title={box.title} />;
    }
  });
  return <div className="box-wrapper">{boxes}</div>;
}
