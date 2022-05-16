import './App.css';

import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import logo from './logo.svg';
import { Home } from './pages/home';

const query = gql`
  query PageQuery {
    Page(page: 1, perPage: 25) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: "last e") {
        id
        title {
          romaji
        }
        description
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  useEffect(() => {
    console.log({ data, loading });
  }, [data, loading]);

  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
