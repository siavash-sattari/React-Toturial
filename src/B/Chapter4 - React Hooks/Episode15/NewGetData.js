import React, {useEffect, useReducer} from "react";
import axios from "axios";

const initialState = {
  isLoading: true,
  post: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {isLoading: false, post: action.payload, error: ""};
    case "FAILED":
      return {isLoading: false, post: {}, error: "An error occured"};
    default:
      return state;
  }
};

export default function NewGetData() {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({type: "SUCCESS", payload: res.data});
      })
      .catch((error) => {
        dispatch({type: "FAILED"});
      });
  }, []);

  return (
    <div>
      {data.isLoading ? "Loading" : data.post.body}
      {data.error && data.error}
    </div>
  );
}
