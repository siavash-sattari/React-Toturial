import React from "react";

export default function Product(props) {
  return (
    <div>
      <h1>This is product #{props.match.params.id}</h1>
    </div>
  );
}
