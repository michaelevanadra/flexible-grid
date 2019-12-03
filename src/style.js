import styled from 'styled-components';
import * as colors from './constants/colors';
import { Button as BSButton } from 'reactstrap';
import JSONPretty from 'react-json-pretty';

export const Wrapper = styled.div`
  height: 100%;
  padding: 3% 0;
  background: ${props => colors[props.theme].background};
  color: ${props => colors[props.theme].text};
`;

export const Button = styled(BSButton)`
  background: ${props => {
    let color;

    if (props.active) {
      color = `${colors[props.theme].primary} !important;`;
    } else {
      color = `${colors[props.theme].secondary} !important;`;
    }
    return color;
  }}
  border-color: ${props => {
    let color;

    if (props.active) {
      color = `${colors[props.theme].primary} !important;`;
    } else {
      color = `${colors[props.theme].secondary} !important;`;
    }
    return color;
  }}
`;

export const Panel = styled.div`
  margin: 15px 0;
`;

export const ConfigPanel = styled.div`
  height: 900px;
  overflow: hidden;
`;

export const CodePanel = styled.div`
  margin: 15px 10px;
  border-radius: 5px;
  padding: 15px;
  background: ${props => colors[props.theme].codeBackground};

  code {
    color: ${props => colors[props.theme].codeText};
  }

  i {
    color: green;
  }
`;

export const JSONPrettier = styled(JSONPretty)`
  overflow: scroll;
  padding: 10px;
  margin: 0 10px;
  border-radius: 5px;
  background: ${props => colors[props.theme].codeBackground};

  pre {
    color: ${props => colors[props.theme].codeText};
  }
`;
