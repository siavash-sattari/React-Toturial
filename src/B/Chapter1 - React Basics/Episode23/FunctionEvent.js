import React from "react";

export default function FunctionEvent() {
  //   Method 1 :
  //   function clickHandler() {
  //     alert("Function Event");
  //   }

  //   Method 2 :
  const clickHandler = () => {
    alert("Function Event");
  };

  return (
    <div>
      <button onClick={clickHandler}>Function Event</button>
    </div>
  );
}
