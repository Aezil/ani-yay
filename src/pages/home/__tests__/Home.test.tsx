import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import React from 'react';

import { Home } from '../Home';

describe('Home page', () => {
  it('should render the home page', () => {
    const { container } = render(
      <MockedProvider>
        <Home />
      </MockedProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
