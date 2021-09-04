import React from "react";
import Toggle from "./Toggle";

export default function SideBar(props) {
  const toggle = props.boxes.map((box) => {
    return <Toggle 
    handeleToggle={props.handeleToggle} 
    activeBoxes={props.activeBoxes}
    box={box} 
    />;
  });

  return <aside>{toggle}</aside>;
}
