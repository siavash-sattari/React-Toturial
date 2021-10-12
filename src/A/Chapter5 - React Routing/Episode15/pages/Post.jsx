import React from "react";
import {useParams, useHistory} from "react-router-dom";

export default function Post() {
  const params = useParams();
  const history = useHistory();
  console.log(history);
  return (
    <>
      <button onClick={() => history.goBack()}>Back</button>
      <h1>Post - {params.slug}</h1>
    </>
  );
}
