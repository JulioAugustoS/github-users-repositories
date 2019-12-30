import React from 'react';
import Router from './routes';

import './global/global.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from './global/styles.global';

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
