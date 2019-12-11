import React from 'react';

import { Section, Card, Center } from '../Globals';

import { newGames as layout } from '../../config/layout';

class NewGames extends React.Component {
  render() {
    return (
      <>
        <h3>New Games</h3>

        <div style={{ overflow: 'scroll' }}>
          <div style={layout.direction === 'row' ? { minWidth: '500px' } : {}}>
            <Section {...layout}>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    1
                  </Card>
                </Center>
              </Section>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    2
                  </Card>
                </Center>
              </Section>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    3
                  </Card>
                </Center>
              </Section>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    4
                  </Card>
                </Center>
              </Section>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    5
                  </Card>
                </Center>
              </Section>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    6
                  </Card>
                </Center>
              </Section>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    7
                  </Card>
                </Center>
              </Section>
              <Section {...layout.items}>
                <Center>
                  <Card
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                      margin: '10px'
                    }}
                  >
                    8
                  </Card>
                </Center>
              </Section>
            </Section>
          </div>
        </div>
      </>
    );
  }
}

export default NewGames;
