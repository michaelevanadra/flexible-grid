import React, { useState } from 'react';
import { Container, ButtonGroup, Button } from 'reactstrap';

import Grid from './components/Grid';

import * as A from './style';

function App() {
  const [themeMode, selectThemeMode] = useState('light');
  const ThemeContext = React.createContext(themeMode);

  return (
    <ThemeContext.Provider value={themeMode}>
      <A.Wrapper theme={themeMode}>
        <Container>
          <ButtonGroup>
            <Button onClick={() => selectThemeMode('light')}>Light</Button>
            <Button onClick={() => selectThemeMode('dark')}>Dark</Button>
          </ButtonGroup>
          <Grid />
        </Container>
      </A.Wrapper>
    </ThemeContext.Provider>
  );
}
export default App;
