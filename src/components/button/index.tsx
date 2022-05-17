import React from 'react';

import { StyledButton, StyledIconContainer } from './styled-components';

interface Props {
  handleClick: () => void;
  label: string;
  icon?: React.ReactElement;
}

export const AniYayButton = ({ handleClick, label, icon }: Props) => (
  <StyledButton onClick={handleClick}>
    {icon ? <StyledIconContainer>{icon}</StyledIconContainer> : null}
    {label}
  </StyledButton>
);
