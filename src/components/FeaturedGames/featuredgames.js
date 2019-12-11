import React from 'react';

import { Section, Card } from '../Globals';
import { featuredGames as layout } from '../../config/layout';

class FeaturedGames extends React.Component {
  render() {
    return (
      <>
        <h3>Featured Games</h3>

        <Section style={{ overflow: 'scroll' }} {...layout}>
          <Section {...layout.items[0]}>
            <Card style={{ minWidth: '110px', height: '200px' }}>Item 1</Card>
          </Section>
          <Section {...layout.items[1]}>
            <Card style={{ minWidth: '110px', height: '200px' }}>Item 2</Card>
          </Section>
          <Section {...layout.items[2]}>
            <Card style={{ minWidth: '110px', height: '200px' }}>Item 3</Card>
          </Section>
          <Section {...layout.items[3]}>
            <Card style={{ minWidth: '110px', height: '200px' }}>Item 4</Card>
          </Section>
          <Section {...layout.items[4]}>
            <Card style={{ minWidth: '110px', height: '200px' }}>Item 5</Card>
          </Section>
        </Section>
      </>
    );
  }
}

export default FeaturedGames;
