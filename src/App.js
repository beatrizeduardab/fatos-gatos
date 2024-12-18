import React from 'react';
import styled from 'styled-components';
import FatosSobreGato from './components/FatosSobreGato.js';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #fafafa;
  padding: 30px;
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <h1>Bem-vindo ao Fatos Sobre Gatos!</h1>
      <FatosSobreGato />
    </AppContainer>
  );
}

export default App;
