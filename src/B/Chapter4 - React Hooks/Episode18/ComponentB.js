import React from "react";

function ComponentB(props) {
  console.log("ComponentB rendered");
  return (
    <div>
      <h1>ComponentB : {props.value}</h1>
      <button onClick={props.changeHandler}>Change B</button>
    </div>
  );
}

export default React.memo(ComponentB);
