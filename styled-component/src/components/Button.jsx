import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotateAnimation = keyframes`
   0% {
      transform: rotate(0);
   }
   100% {
      transform: rotate(360deg);
   }
`

const StyledButton = styled.button.attrs(props => ({
   outlined: true,
}))`
   bottom: none;
   padding: 10px 15px;
   font-size: 18px;
   cursor: pointer;
   transition: all 0.3s easy 0s;
   &:focus {
      outline: none;
   }
   &:hover {
      animation: ${rotateAnimation} 1s 1 linear;
   }
   align-self: ${props => props.align || 'stretch'};
   ${props => props.primary && css`
      color: ${props => props.color || '#fff'};
      background: ${props => props.background || '#fff'};
   `} 
    ${props => props.outlined && css`
      color: ${props => props.color || '#f00'};
      border: 1px solid ${props => props.borderColor || '#f00'};
      background: transparent;
   `}
`

const LargeButton = styled(StyledButton)`
   font-size: 3rem;
`

const Button = (props) => {
   return (
      <StyledButton {...props}/>
   )
}

export default Button