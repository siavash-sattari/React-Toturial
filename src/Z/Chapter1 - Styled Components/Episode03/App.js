// Extending Styles

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: white;
  display: block;
`;

// A new component based on Button, but with some override styles

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// A custom component

const ReversedButton = (props) => <Button {...props} children={props.children.split("").reverse()} />;

function App() {
  return (
    <div>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    </div>
  );
}

export default App;
