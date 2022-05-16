import { useQuery } from '@apollo/client';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { animeQuery } from '../../gql/Query';

const mockData = [
  {
    id: 'tacos',
    title: 'taco bell',
  },
  {
    id: 'foodie',
    title: 'food place',
  },
  {
    id: 'burger',
    title: 'mcdonalds',
  },
];

export const Home = () => {
  const [value, setValue] = useState<string>('');

  const { data, loading } = useQuery(animeQuery, {
    variables: {
      page: 1,
      perPage: 25,
      title: 'Last Exile',
    },
  });

  console.log({ data, loading });

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h1>Ani Yay</h1>
      <FontAwesomeIcon icon={faCoffee} />
      <div className='searchBar'>
        <input type='text' placeholder='Search' onChange={handleValueChange} value={value} />
      </div>
      {mockData.map((item: any, index: number) => (
        <div key={index}>{item.title}</div>
      ))}
    </>
  );
};
