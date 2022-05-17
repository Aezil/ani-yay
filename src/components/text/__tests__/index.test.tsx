import { render } from '@testing-library/react';
import React from 'react';

import { Text } from '../index';

describe('Ani-Yay Text', () => {
  it('should render the text component', () => {
    const { container } = render(<Text>Snake?? Snake??? SNAAAAAAAAAAAAAAAAAKKKKKKKKEEEEEEEE</Text>);
    expect(container).toMatchSnapshot();
  });
});
