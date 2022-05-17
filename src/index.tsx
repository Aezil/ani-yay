import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

const StyledContainer = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  padding: 50px;
  overflow-y: auto;
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <StyledContainer>
        <App />
      </StyledContainer>
    </React.StrictMode>
  </ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
