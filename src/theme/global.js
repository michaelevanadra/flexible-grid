import { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
  }
  body {
    background: ${props => colors[props.theme].background} !important;
    padding: 3% 0;
    color: ${props => colors[props.theme].text} !important;
    overflow-x: hidden;
  }
`;
