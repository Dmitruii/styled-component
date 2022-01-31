import React from 'react';
import styled from 'styled-components';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';
import Button from './components/Button';

const AppWrapper = styled.div`
   widh: 100%;
   min-height: 100vh;
   padding: 2rem;
   background: #000;
`

const App = () => {
   return (
      <AppWrapper>
         <Flex justify='center'>
            <Title color='#0f0'>Simple console</Title>
         </Flex>
         <Flex direction='column'>
            <Console color='#0f0'/>
            <Button outlined color='#0f0' borderColor='#0f0' align='flex-end'>Click Me!</Button>
         </Flex>
      </AppWrapper>
   );
}

export default App;