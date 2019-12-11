import React, { useState } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';

import ThemeContext from './context/theme';

import { GlobalStyle } from './theme/global';
import Banner from './components/Banner';
import FeaturedGames from './components/FeaturedGames';
import NewGames from './components/NewGames';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle theme={theme} />

      <Container>
        <ButtonGroup style={{ marginBottom: '15px' }}>
          <Button onClick={() => setTheme('dark')}>Dark</Button>
          <Button onClick={() => setTheme('light')}>Light</Button>
        </ButtonGroup>
        <Banner />
        <FeaturedGames />
        <NewGames />
      </Container>
    </ThemeContext.Provider>
  );
}
export default App;
