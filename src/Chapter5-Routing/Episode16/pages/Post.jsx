import React from "react";
import {useParams, useHistory, useRouteMatch} from "react-router-dom";

export default function Post() {
  const params = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  console.log(match);
  return (
    <>
      <button onClick={() => history.goBack()}>Back</button>
      <h1>Post - {params.slug}</h1>
      {match && <p>Matched</p>}
    </>
  );
}
