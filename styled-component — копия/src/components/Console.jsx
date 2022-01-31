import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
   resize: none;
   width: 100%;
   height: 70vh;
   background: #000;
   border: none;
   color: ${(props => props.color || props.theme.colors.primary)};
   font-size: 2rem;
   font-family: consolas;
   &:focus {
      outline: none;
   }
   @media ${props => props.theme.media.phone} {
      border: 1px solid #f00;
   }
   @media ${props => props.theme.media.tablet} {
      border: 1px solid #0ff;
   }
`

const Console = ({color, ...props}) => {

   const [lines, setLines] = useState(['D/chrome/users/docs/console/']);

   const onKeyPress = e => {
      if(e.charCode === 13) setLines([...lines, 'D/chrome/users/docs/console/'])
   }

   return <Flex>
      <Flex direction='column'>
         {lines.map((line, index) => <Line color={color} key={index}>{line}</Line>)}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
   </Flex>
}

export default Console