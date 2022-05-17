import { render } from '@testing-library/react';
import React from 'react';

import { Media, MediaStatus, MediaType } from '../../../interfaces/interfaces';
import { AniYayTable } from '..';

const MEDIA_MOCK: Media[] = [
  {
    id: 3423,
    title: {
      romaji: 'Woo',
    },
    description: 'I am a description',
    status: MediaStatus.cancelled,
    type: MediaType.anime,
    popularity: 5,
    startDate: {
      day: 1,
      month: 1,
      year: 2022,
    },
    endDate: {
      day: 1,
      month: 1,
      year: 2022,
    },
    format: 'TV',
  },
  {
    id: 4,
    title: {
      romaji: 'Nice',
    },
    description: 'I am a description',
    status: MediaStatus.cancelled,
    type: MediaType.anime,
    popularity: 5,
    startDate: {
      day: 1,
      month: 1,
      year: 2022,
    },
    endDate: {
      day: 1,
      month: 1,
      year: 2022,
    },
    format: 'TV',
  },
];

describe('Ani-Yay Table', () => {
  it('should render table component with no value', () => {
    const { container } = render(<AniYayTable media={[]} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the table with a few values', () => {
    const { container } = render(<AniYayTable media={MEDIA_MOCK} />);
    expect(container).toMatchSnapshot();
  });
});
