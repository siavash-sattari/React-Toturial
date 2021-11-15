// Styling any component

import React from "react";
import styled from "styled-components";

const Link = ({className, children}) => <a className={className}>{children}</a>;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  font-size: 2em;
`;

const Container = styled.div`
  text-align: center;
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <Container>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </Container>
  );
}

export default App;
