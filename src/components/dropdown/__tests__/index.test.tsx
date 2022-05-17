import { render } from '@testing-library/react';
import React from 'react';

import { AniYayDropdown, DropdownOption } from '..';

const OPTIONS: DropdownOption[] = [
  {
    label: 'Hello',
    value: 'hello',
  },
  {
    label: 'World',
    value: 'world',
  },
];

describe('Ani-Yay Dropdown', () => {
  it('should render dropdown component', () => {
    const { container } = render(<AniYayDropdown label='Test dropdown' options={OPTIONS} onChange={event => {}} />);
    expect(container).toMatchSnapshot();
  });
});
