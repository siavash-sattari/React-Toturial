import React from "react";

function ComponentA(props) {
  console.log("ComponentA rendered");
  return (
    <div>
      <h1>ComponentA : {props.value}</h1>
      <button onClick={props.changeHandler}>Change A</button>
    </div>
  );
}

export default React.memo(ComponentA);
