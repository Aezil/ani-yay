import React from 'react';

import { StyledInput } from './styled-components';

interface Props extends React.ComponentPropsWithoutRef<'input'> {}

export const AniYayInput = (props: Props) => <StyledInput {...props} />;
