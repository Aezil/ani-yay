import React from 'react';
import styled from 'styled-components';

import { Home } from './pages';

const StyledContainer = styled.div`
  background-color: #fff;
  margin: auto;
  max-width: 1200px;
  padding: 30px;
  border-radius: 10px;
`;

function App() {
  return (
    <StyledContainer>
      <Home />
    </StyledContainer>
  );
}

export default App;
