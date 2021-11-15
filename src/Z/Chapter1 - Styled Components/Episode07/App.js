import React from "react";
import styled from "styled-components";

const Button = styled.button``;

const Wrapper = styled.div`
  margin: 2em;
  background-color: yellow;
  padding: 3em;
  ${Button} {
    display: block;
    background-color: #fff;
    padding: 1em;
    margin: 0 auto;
    width: 50%;
  }
`;

function App() {
  return (
    <Wrapper>
      <Button>Create my Account</Button>
    </Wrapper>
  );
}

export default App;
