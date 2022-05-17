import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: block;
  position: relative;
  user-select: none;
  transition: opacity 150ms ease-in-out;
`;

export const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #cccfcf;
  box-sizing: border-box;
  color: #191919;
  cursor: pointer;
  font-size: 14px;
  height: 44px;
  padding: 0 16px;
  width: 100%;
  &:focus {
    outline: 0;
    border-color: #9a9fa1;
  }
  text-indent: 0.01px;
`;

export const StyledOptions = styled.div`
  padding: 0;
  list-style: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05);
  left: 0;
  margin: 10px 0 0;
  max-height: 356px;
  overflow: auto;
  position: absolute;
  right: 0;
  top: -12px;
  z-index: 100000;
`;

export const StyledOption = styled.li`
  position: relative;
  align-items: center;
  color: #191919;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  min-height: 60px;
  justify-content: space-between;
  padding: 0 20px;
  transition: opacity 200ms;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #fafafa;
  }
`;
