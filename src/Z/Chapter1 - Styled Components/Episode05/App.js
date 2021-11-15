// Passed props

import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function App() {
  return (
    <div>
      <Input value="@probablyup" type="text" />
      <Input value="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
  );
}

export default App;
