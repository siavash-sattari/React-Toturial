import React from "react";
import styled, {css} from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.75em 1.25em;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <Container>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </Container>
  );
}

export default App;