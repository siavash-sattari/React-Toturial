import React, {useRef, useEffect} from "react";

export default function App() {
  const input = useRef(null);

  useEffect(() => {
    console.log(input.current.type);
    input.current.focus()
  }, []);

  return (
    <div>
      <input type="text" ref={input} />
    </div>
  );
}
