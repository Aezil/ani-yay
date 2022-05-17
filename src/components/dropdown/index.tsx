import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { StyledContainer, StyledOption, StyledOptions, StyledSelect } from './styled-components';

export interface DropdownOption {
  value: string;
  label: string;
}

interface Props {
  label: string;
  defaultLabel?: string;
  options: DropdownOption[];
  onChange: (event: any) => void;
}

export const AniYayDropdown = ({ label = 'Choose one', options, onChange }: Props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const handleOptionClick = (option: DropdownOption) => {
    setOpened(!opened);
    setValue(option.label);
    onChange(option.value);
  };

  return (
    <StyledContainer>
      <StyledSelect onClick={() => setOpened(!opened)}>
        <span>{value ?? label}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </StyledSelect>
      {opened ? (
        <StyledOptions>
          {options.map((option: DropdownOption, index: number) => (
            <StyledOption onClick={() => handleOptionClick(option)} key={index}>
              {option.label}
            </StyledOption>
          ))}
        </StyledOptions>
      ) : null}
    </StyledContainer>
  );
};
