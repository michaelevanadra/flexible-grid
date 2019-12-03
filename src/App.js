import React, { useState } from 'react';
import { Container, ButtonGroup } from 'reactstrap';

import * as gridConfig from './config/grid';

import { GridParent, GridChild, Grid } from './components/Grid';

import * as A from './style';

function App() {
  const [themeMode, selectThemeMode] = useState('dark');
  const ThemeContext = React.createContext(themeMode);

  return (
    <ThemeContext.Provider value={themeMode}>
      <A.Wrapper theme={themeMode}>
        <Container>
          <A.Panel>
            <ButtonGroup>
              <A.Button
                theme={themeMode}
                active={themeMode === 'light'}
                onClick={() => selectThemeMode('light')}
              >
                Light
              </A.Button>
              <A.Button
                theme={themeMode}
                active={themeMode === 'dark'}
                onClick={() => selectThemeMode('dark')}
              >
                Dark
              </A.Button>
            </ButtonGroup>
          </A.Panel>

          <A.Panel>
            <h1>Flexible Grid</h1>
            <h3>Reusable Component</h3>

            <A.CodePanel theme={themeMode}>
              <code>
                {`import { GridParent, GridChild } from './path/to/Grid';`}
              </code>
              <br />
              <br />
              <code>{`function Grid() {`}</code>
              <br />
              <code>&nbsp;&nbsp;{`return (`}</code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`<GridParent id="container" direction="column">`}
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`<GridChild id="first-child" direction="column" grow="2" order="3">`}
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>{`// another grid here`}</i>
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`</GridChild>`}
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`<GridChild id="second-child" order="1">`}
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>{`// element goes here`}</i>
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`</GridChild>`}
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`<GridChild id="third-child" order="2">`}
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>{`// element goes here`}</i>
              </code>
              <br />
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`</GridChild>`}
              </code>
              <br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;{`</GridParent>`}</code>
              <br />
              <code>&nbsp;&nbsp;{`);`}</code>
              <br />
              <code>{`}`}</code>
              <br />
              <code>{`export default Grid;`}</code>
            </A.CodePanel>

            <h4>Properties</h4>
            <A.CodePanel theme={themeMode}>
              <code>{`GridParent.propTypes = {`}</code>
              <br />
              <code>&nbsp;&nbsp;{`id: PropTypes.string,`}</code>
              <br />
              <code>
                &nbsp;&nbsp;{`direction: PropTypes.string,`}
                <i>
                  &nbsp;&nbsp;
                  {`// orientation of child elements; row|row-reverse|column|column-reverse|initial|inherit`}
                </i>
              </code>
              <br />
              <code>&nbsp;&nbsp;{`items: PropTypes.array`}</code>
              <br />
              <code>{`};`}</code>
              <br />
              <br />
              <code>{`GridChild.propTypes = {`}</code>
              <br />
              <code>&nbsp;&nbsp;{`id: PropTypes.string,`}</code>
              <br />
              <code>
                &nbsp;&nbsp;{`direction: PropTypes.string,`}
                <i>
                  &nbsp;&nbsp;
                  {`// orientation of child elements; row|row-reverse|column|column-reverse|initial|inherit`}
                </i>
              </code>
              <br />
              <code>&nbsp;&nbsp;{`items: PropTypes.array`}</code>
              <br />
              <code>
                &nbsp;&nbsp;{`grow: PropTypes.string`}
                <i>
                  &nbsp;&nbsp;
                  {`// n times grow among the siblings`}
                </i>
              </code>
              <br />
              <code>
                &nbsp;&nbsp;{`shrink: PropTypes.string`}
                <i>
                  &nbsp;&nbsp;
                  {`// n times shrink among the siblings`}
                </i>
              </code>
              <br />
              <code>
                &nbsp;&nbsp;{`basis: PropTypes.string`}
                <i>
                  &nbsp;&nbsp;
                  {`// sets initial width`}
                </i>
              </code>
              <br />
              <code>
                &nbsp;&nbsp;{`order: PropTypes.string`}
                <i>
                  &nbsp;&nbsp;
                  {`// order among siblings`}
                </i>
              </code>

              <br />
              <code>{`};`}</code>
            </A.CodePanel>
          </A.Panel>

          <h3>From Config</h3>

          <A.ConfigPanel>
            <GridParent>
              <GridChild>
                <A.JSONPrettier
                  id="json-pretty"
                  data={gridConfig}
                  theme={themeMode}
                ></A.JSONPrettier>
              </GridChild>
              <GridChild>
                <Grid />
              </GridChild>
            </GridParent>
          </A.ConfigPanel>
        </Container>
      </A.Wrapper>
    </ThemeContext.Provider>
  );
}
export default App;
