import React, { useState } from 'react';
import { Container, ButtonGroup } from 'reactstrap';

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
            <A.Button
              theme={themeMode}
              onClick={() => selectThemeMode('light')}
            >
              Light
            </A.Button>
            <A.Button theme={themeMode} onClick={() => selectThemeMode('dark')}>
              Dark
            </A.Button>
          </ButtonGroup>
          <Grid />
        </Container>
      </A.Wrapper>
    </ThemeContext.Provider>
  );
}
export default App;
