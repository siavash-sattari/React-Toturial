import React from "react";

export default function AboutUs(props) {
  const reset = () => {
    // props.history.push("/blogs");
    props.history.replace("/blogs");
  };
  return (
    <div>
      <h1>About Us</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
