import { React } from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
   font-size: 2rem;
   color: ${props => props.color || '#fff'};
`

const Line = (props) => {
   return <StyledLine {...props} />
}

export default Line 