import React, { useState } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';

import ThemeContext from './context/theme';

import { GlobalStyle } from './theme/global';

// Modifications
import GenericComponent from './components/GenericComponent';
import Sample1 from  './config/sample-data1';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle theme={theme} />

      <Container>

        <GenericComponent {...Sample1} />

      </Container>
    </ThemeContext.Provider>
  );
}
export default App;
