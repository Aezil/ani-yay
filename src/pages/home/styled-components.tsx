import styled from 'styled-components';

import { Text } from '../../components';

export const StyledHeadingContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 472px) {
    flex-direction: column;
  }
`;

export const StyledInputContainer = styled.div`
  min-width: 200px;
  max-width: 400px;
  flex-grow: 1;
  padding-right: 10px;
`;

export const StyledButtonContainer = styled.div`
  @media screen and (max-width: 472px) {
    margin-top: 10px;
  }
`;

export const StyledSpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const StyledLoadingText = styled(Text)`
  margin-top: 10px;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const StyledFilter = styled.div`
  min-width: 200px;
  &:last-child {
    margin-left: 15px;
  }
  @media screen and (max-width: 575px) {
    &:last-child {
      margin-top: 10px;
      margin-left: 0;
    }
  }
`;
