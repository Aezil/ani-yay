import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render } from '@testing-library/react';
import React from 'react';

import { AniYayButton } from '..';

describe('Ani-Yay Button', () => {
  it('should render button component', () => {
    const { container } = render(<AniYayButton handleClick={() => {}} label={'I am a test button'} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the button component with an icon', () => {
    const { container } = render(
      <AniYayButton icon={<FontAwesomeIcon icon={faSearch} />} handleClick={() => {}} label={'I am a test button'} />,
    );
    expect(container).toMatchSnapshot();
  });
});
