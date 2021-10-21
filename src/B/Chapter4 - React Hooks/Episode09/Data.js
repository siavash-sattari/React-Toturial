import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => setData(res.data));
    console.log(data);
  }, []);
  
  return <div>{data.length ? data.map((item) => <h3 key={item.id}>{item.title}</h3>) : <h1>Loading</h1>}</div>;
}
