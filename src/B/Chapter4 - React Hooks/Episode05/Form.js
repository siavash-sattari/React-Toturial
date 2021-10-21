import React, {useState} from "react";

export default function Form() {
  const [item, setItem] = useState("");
  const [data, setData] = useState(["item"]);
  return (
    <div>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => setData([...data, item])}>Add Item</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
