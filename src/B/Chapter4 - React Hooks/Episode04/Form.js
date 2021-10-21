import React, {useState} from "react";

export default function Form() {
  const [data, setData] = useState({name: "", age: ""});
  return (
    <div>
      <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
      <input type="text" value={data.age} onChange={(e) => setData({...data, age: e.target.value})} />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
