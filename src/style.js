import styled from 'styled-components';
import * as themeColors from './constants/themeColors';

export const Wrapper = styled.div`
  height: 100vh;
  margin-top: 3%;
  background: ${props => props.theme};
`;
