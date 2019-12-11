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
              <Section {...layout.items[0]}>
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
              <Section {...layout.items[1]}>
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
              <Section {...layout.items[2]}>
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
              <Section {...layout.items[3]}>
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
              <Section {...layout.items[4]}>
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
              <Section {...layout.items[5]}>
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
              <Section {...layout.items[6]}>
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
              <Section {...layout.items[7]}>
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
