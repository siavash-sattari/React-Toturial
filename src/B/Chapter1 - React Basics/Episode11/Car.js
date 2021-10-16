import React from "react";

export default function Car(props) {
  // props.color = "yellow"; ==========> Error
  return (
    <>
      <p>
        The model of car is {props.model} and it's color is {props.color}
      </p>
      <span>{props.children}</span>
    </>
  );
}
