import { render } from '@testing-library/react';
import React from 'react';

import { Heading } from '..';

describe('Heading', () => {
  it('should render Heading component', () => {
    const { container } = render(<Heading>I am a test</Heading>);
    expect(container).toMatchSnapshot();
  });
});
