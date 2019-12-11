import React from 'react';

import ThemeContext from '../../context/theme';
import { Section, Card } from '../Globals';

class Banner extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <Section>
        <Card style={{ height: '80px' }}>Banner</Card>
      </Section>
    );
  }
}

export default Banner;
