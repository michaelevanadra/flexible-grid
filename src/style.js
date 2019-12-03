import styled from 'styled-components';
import * as colors from './constants/colors';
import { Button as BSButton } from 'reactstrap';

export const Wrapper = styled.div`
  height: 100vh;
  padding-top: 3%;
  background: ${props => colors[props.theme].background};
`;

export const Button = styled(BSButton)`
  background: ${props => colors[props.theme].primary} !important;
  border-color: ${props => colors[props.theme].primary} !important;
`;
