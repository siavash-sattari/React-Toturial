import React from "react";
import queryString from "query-string";

export default function Blogs(props) {
  const parseQuery = () => {
    console.log(props.location.search);
    const result = queryString.parse(props.location.search);
    console.log(result);
  };
  return (
    <div>
      <h1>Blogs :</h1>
      <p>The author is {props.match.params.author}</p>
      <button onClick={parseQuery}>Show Query</button>
    </div>
  );
}
