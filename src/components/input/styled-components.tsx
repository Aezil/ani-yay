import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 44px;
  border: 1px solid #cccfcf;
  padding: 0px 16px;
  border-radius: 10px;
  font-size: 14px;
  color: #000;
  width: 100%;
  transition: border-color 250ms ease-in-out 0s;
  line-height: 1.5;
  box-sizing: border-box;
  appearance: none;
  &:focus,
  &:hover {
    outline: 0;
    border-color: #6f6f6f;
  }
`;
