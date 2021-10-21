import React, {useState, useEffect} from "react";
import axios from "axios";

export default function GetData() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setIsLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setIsLoading(false);
        setPost({});
        setError("An error occured");
      });
  },[]);

  return (
    <div>
      {isLoading ? "Loading" : post.body}
      {error && error}
    </div>
  );
}
