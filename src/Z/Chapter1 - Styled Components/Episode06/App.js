import React from "react";
import styled from "styled-components";

// Attaching additional props =========================================

const Input1 = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",
  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Overriding .attrs ===================================================

const Input2 = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input2).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

// ======================================================================

function App() {
  return (
    <div>
      <Input1 placeholder="A small text input" />
      <br />
      <Input1 placeholder="A bigger text input" size="2em" />
      <br />
      <Input2 placeholder="A bigger text input" size="2em" />
      <br />
      {/* Notice we can still use the size attr from Input */}
      <PasswordInput placeholder="A bigger password input" size="2em" />
    </div>
  );
}

export default App;
