import { render } from '@testing-library/react';
import React from 'react';

import { AniYayInput } from '..';

describe('Ani-Yay Input', () => {
  it('should render Input component with no value', () => {
    const { container } = render(<AniYayInput placeholder='Hello there!' />);
    expect(container).toMatchSnapshot();
  });

  it('should render Input component with a value', () => {
    const { container } = render(<AniYayInput placeholder='Hello there!' value={'GENERAL KENOBI'} />);
    expect(container).toMatchSnapshot();
  });
});
